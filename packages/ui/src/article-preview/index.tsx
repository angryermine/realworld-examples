import React from 'react';
import {Card} from 'react-bootstrap';

import {Article} from '@project/api';

import './index.css';

export interface ArticlePreviewProps {
    article: Article;
}

export function ArticlePreview({article}: ArticlePreviewProps) {
    return (
        <Card className="ArticlePreview">
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
