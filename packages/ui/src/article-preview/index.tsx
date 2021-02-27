import React from 'react';
import {Card, CardContent, Typography, CardHeader, Avatar} from '@material-ui/core';

import {Article} from '@project/api';

import './index.css';

export interface ArticlePreviewProps {
    article: Article;
}

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};

function formatDate(date: string) {
    return new Intl.DateTimeFormat('en', DATE_OPTIONS).format(new Date(date)); // ToDo use locale
}

export function ArticlePreview({article}: ArticlePreviewProps) {
    return (
        <Card className="ArticlePreview">
            <CardHeader
                avatar={<Avatar alt={article.author.username} src={article.author.image} />}
                title={article.author.username}
                subheader={formatDate(article.createdAt)}
            />
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
