import {Article, Comment} from '../types';

export type ArticlesRequest = {
    /**
     * Filter by tag
     */
    tag?: string;

    /**
     * Filter by author (username)
     */
    author?: string;

    /**
     * Filter by favorites of a user (username)
     */
    favorited?: string;

    /**
     * Limit number of articles returned (default is 20)
     */
    limit?: number;

    /**
     * Offset/skip number of articles (default is 0)
     */
    offset?: number;
};

export type FeedRequest = {
    /**
     * Limit number of articles returned (default is 20)
     */
    limit?: number;

    /**
     * Offset/skip number of articles (default is 0)
     */
    offset?: number;
};

export type NewArticle = {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
};

export type NewArticleRequest = {
    article: NewArticle;
};

export type UpdateArticle = {
    title?: string;
    description?: string;
    body?: string;
};

export type UpdateArticleRequest = {
    article: UpdateArticle;
};

export type NewComment = {
    body: string;
};

export type NewCommentRequest = {
    comment: NewComment;
};

export type SingleArticleResponse = {
    article: Article;
};

export type MultipleArticlesResponse = {
    articles: Article[];
    articlesCount: number;
};

export type SingleCommentResponse = {
    comment: Comment;
};

export type MultipleCommentsResponse = {
    comments: Comment[];
};
