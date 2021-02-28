import {performance} from 'perf_hooks';
import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, MatchedRoute} from 'react-router-config';
import {fork, serialize, allSettled} from 'effector/fork';
import {root, forward, Event} from 'effector-root';
import {ServerStyleSheets} from '@material-ui/core/styles';

import {StartParams} from './types';
import {App} from './app';
import {ROUTES} from './pages/routes';

const serverStarted = root.createEvent<{
    req: express.Request;
    res: express.Response;
}>();

const requestHandled = serverStarted.map(({req}) => req);

const routesMatched = requestHandled.map((req) => {
    const url = `${req.protocol}://${req.hostname}${req.originalUrl}`;
    return {
        routes: matchRoutes(ROUTES, req.path).filter(lookupStartEvent),
        query: Object.fromEntries(new URL(url).searchParams),
    };
});

for (const {startFx} of ROUTES) {
    if (!startFx) {
        continue;
    }

    const matchedRoute = routesMatched.filterMap(({routes, query}) => {
        const route = routes.find(routeWithEvent(startFx));
        if (route) {
            return {route, query};
        }

        return undefined;
    });

    forward({
        from: matchedRoute.map(({route, query}) => ({
            params: route.match.params,
            query,
        })),
        to: startFx,
    });
}

let assets: {
    client: {
        css: string;
        js: string;
    };
};

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};

syncLoadAssets();

export default express()
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get('/*', async (req: express.Request, res: express.Response) => {
        console.info('[REQUEST] %s %s', req.method, req.url);
        const timeStart = performance.now();
        const scope = fork(root);
        const sheets = new ServerStyleSheets();

        try {
            await allSettled(serverStarted, {
                scope,
                params: {req, res},
            });
        } catch (error) {
            console.error(error);
        }

        const context = {};

        const html = ReactDOMServer.renderToString(
            sheets.collect(
                <StaticRouter context={context} location={req.url}>
                    <App root={scope} />
                </StaticRouter>,
            ),
        );

        const storesValues = serialize(scope);
        const css = sheets.toString();

        res.send(renderFullPage(html, css, assets.client.css, assets.client.js, storesValues));
        console.info('[PERF] sent page at %sms', (performance.now() - timeStart).toFixed(2));
    });

function renderFullPage(
    html: string,
    css: string,
    assetsCss: string,
    assetsJs: string,
    storesValues: Record<string, unknown>,
) {
    return `<!doctype html>
        <html lang="">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Razzle TypeScript</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style id="jss-server-side">${css}</style>
            ${assetsCss ? `<link rel="stylesheet" href="${assetsCss}">` : ''}
            ${
                process.env.NODE_ENV === 'production'
                    ? `<script src="${assetsJs}" defer></script>`
                    : `<script src="${assetsJs}" defer crossorigin></script>`
            }
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.INITIAL_STATE = ${JSON.stringify(storesValues)}
            </script>
        </body>
    </html>`;
}

function lookupStartEvent<P>(match: MatchedRoute<P>): Event<StartParams> | undefined {
    return match.route.startFx;
}

function routeWithEvent(event: Event<StartParams>) {
    return function <P>(route: MatchedRoute<P>) {
        return lookupStartEvent(route) === event;
    };
}
