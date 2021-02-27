import {createEffect, createStore, guard} from 'effector-root';

import {articles, MultipleArticlesResponse} from '@project/api';
import {createStart} from '../../../routing';

export const pageLoaded = createStart();
export const fetchArticlesFx = createEffect(() => articles.list({offset: 0, limit: 50}));

export const $articles = createStore<MultipleArticlesResponse | null>(null);
$articles.on(fetchArticlesFx.doneData, (_, data) => data);

const articlesLoaded = $articles.map((value) => value === null);

guard({
    source: pageLoaded,
    filter: articlesLoaded,
    target: fetchArticlesFx,
});
