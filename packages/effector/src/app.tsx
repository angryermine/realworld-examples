import React, {lazy, Suspense} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {AppLayout, Spinner} from '@project/ui';

const history = createBrowserHistory();

const ArticlesPage = lazy(() => import(/* webpackChunkName: "articles" */ './pages/articles'));

export function App() {
    return (
        <AppLayout>
            <Router history={history}>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route path="/" render={() => <ArticlesPage />} exact />
                    </Switch>
                </Suspense>
            </Router>
        </AppLayout>
    );
}
