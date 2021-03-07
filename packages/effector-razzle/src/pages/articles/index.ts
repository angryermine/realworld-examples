import {lazy} from 'react-imported-component';

import {pageLoaded} from './models';

export const ArticlesPage = lazy(() => import(/* webpackChunkName: "articles" */ './components/page'));
export const articlesStartFx = pageLoaded;
