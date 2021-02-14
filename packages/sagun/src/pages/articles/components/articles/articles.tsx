import React from 'react';
import {useOperation} from '@iiiristram/sagun';

import {ArticlesList} from '@project/ui';

import {OPERATIONS} from '../../consts';

export function Articles() {
    const {result} = useOperation({
        operationId: OPERATIONS.LOAD_ARTICLES,
        suspense: true,
    });

    return <ArticlesList articles={result?.articles} />;
}
