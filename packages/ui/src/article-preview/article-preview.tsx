import React from 'react';

import {Article} from '@project/api';

export interface ArticlePreviewProps {
    article: Article;
}

export function ArticlePreview({article}: ArticlePreviewProps) {
    return (
        <div key={article.slug}>
            <div>{article.title}</div>
            <div>{article.description}</div>
        </div>
    );
}
