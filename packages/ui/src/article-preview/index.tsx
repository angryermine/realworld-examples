import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

import {Article} from '@project/api';

import './index.css';

export interface ArticlePreviewProps {
    article: Article;
}

export function ArticlePreview({article}: ArticlePreviewProps) {
    return (
        <Card className="ArticlePreview">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {article.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {article.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
