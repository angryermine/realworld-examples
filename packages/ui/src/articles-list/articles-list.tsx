import React, {Fragment} from 'react';

import {Article} from '@project/api';

import {ArticlePreview} from '../article-preview';

export interface ArticlesListProps {
    articles?: Article[];
}

export function ArticlesList({articles}: ArticlesListProps) {
    return (
        <div>
            {articles?.map((article) => (
                <Fragment key={article.slug}>
                    <ArticlePreview article={article} />
                    <hr />
                </Fragment>
            ))}
        </div>
    );
}
