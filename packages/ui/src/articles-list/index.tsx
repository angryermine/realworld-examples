import React from 'react';

import {Article} from '@project/api';

import {ArticlePreview} from '../article-preview';

export interface ArticlesListProps {
    articles?: Article[];
}

export function ArticlesList({articles}: ArticlesListProps) {
    return (
        <div>
            {articles?.map((article) => (
                <ArticlePreview key={article.slug} article={article} />
            ))}
        </div>
    );
}
