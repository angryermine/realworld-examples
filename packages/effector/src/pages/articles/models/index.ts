import {createEffect, createStore, forward} from 'effector';
import {createGate} from 'effector-react';

import {articles, MultipleArticlesResponse} from '@project/api';

export const PageGate = createGate();

export const fetchArticlesFx = createEffect(() => articles.getArticles({offset: 0, limit: 50}));

export const $articles = createStore<MultipleArticlesResponse | null>(null).on(
    fetchArticlesFx.doneData,
    (_, data) => data,
);

forward({
    from: PageGate.open,
    to: [fetchArticlesFx],
});
