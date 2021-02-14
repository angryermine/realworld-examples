import React from 'react';
import {useStore} from 'effector-react';

import {ArticlesList} from '@project/ui';

import {AsyncContent} from 'components/async-content';
import {$articles, fetchArticlesFx} from '../../models';

export function Articles() {
    const result = useStore($articles);
    const isLoading = useStore(fetchArticlesFx.pending);

    return (
        <AsyncContent isLoading={isLoading}>
            <ArticlesList articles={result?.articles} />
        </AsyncContent>
    );
}
