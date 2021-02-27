import {RouteConfig} from 'react-router-config';

import {ArticlesPage, articlesStartFx} from './articles';

export const ROUTES: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: ArticlesPage,
        startFx: articlesStartFx,
    },
];
