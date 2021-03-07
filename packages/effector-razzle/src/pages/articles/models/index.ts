import {createEffect, createStore, guard} from 'effector-root';

import {articles, MultipleArticlesResponse} from '@project/api';

import {createStart} from '../../../routing';

export const pageLoaded = createStart();
export const fetchArticlesFx = createEffect((page: number) => articles.list({offset: (page - 1) * 50, limit: 50}));

export const $page = createStore<number | null>(null).on(pageLoaded, (state, payload) => {
    const next = payload.query?.page ? Number(payload.query.page) : 1;
    return next !== state ? next : state;
});

export const $articles = createStore<MultipleArticlesResponse | null>(null);
$articles.on(fetchArticlesFx.doneData, (_, data) => data);

export const $paginationCount = $articles.map((x) => x?.articlesCount ?? 0);
export const $paginationPage = $page.map((x) => x ?? 0);

guard({
    source: $page.map(Number),
    filter: (page) => page > 0,
    target: fetchArticlesFx,
});
