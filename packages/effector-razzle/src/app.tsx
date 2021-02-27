import React from 'react';
import {LazyBoundary} from 'react-imported-component';
import {Scope} from 'effector/fork';
import {Provider} from 'effector-react/ssr';
import {renderRoutes} from 'react-router-config';

import {AppLayout, Spinner} from '@project/ui';

import {ROUTES} from './pages/routes';

interface Props {
    root: Scope;
}

export function App({root}: Props) {
    return (
        <Provider value={root}>
            <AppLayout>
                <LazyBoundary fallback={<Spinner />}>{renderRoutes(ROUTES)}</LazyBoundary>
            </AppLayout>
        </Provider>
    );
}
