import {pageLoaded} from './models';
import {lazy} from 'react-imported-component';

export const ArticlesPage = lazy(() => import(/* webpackChunkName: "articles" */ './components/page'));
export const articlesStartFx = pageLoaded;
