import {http} from '../_http';
import {
    ArticlesRequest,
    FeedRequest,
    MultipleArticlesResponse,
    MultipleCommentsResponse,
    NewArticleRequest,
    NewCommentRequest,
    SingleArticleResponse,
    SingleCommentResponse,
    UpdateArticleRequest,
} from './types';

export const articles = {
    /**
     * Get most recent articles globally. Use query parameters to filter results. Auth is optional
     * @param req Query parameters
     */
    list(req?: ArticlesRequest): Promise<MultipleArticlesResponse> {
        return http.get<ArticlesRequest, MultipleArticlesResponse>('articles', req);
    },

    /**
     * Get most recent articles from users you follow. Use query parameters to limit. Auth is required
     * @param req Query parameters
     */
    feed(req?: FeedRequest): Promise<MultipleArticlesResponse> {
        return http.get<FeedRequest, MultipleArticlesResponse>('articles/feed', req);
    },

    /**
     * Get an article. Auth not required
     * @param slug Slug of the article to get
     */
    find(slug: string): Promise<SingleArticleResponse> {
        return http.get<never, SingleArticleResponse>(`articles/${slug}`);
    },

    /**
     * Create an article. Auth is required
     * @param body Article to create
     */
    create(body: NewArticleRequest): Promise<SingleArticleResponse> {
        return http.post<NewArticleRequest, SingleArticleResponse>('articles', body);
    },

    /**
     * Update an article. Auth is required
     * @param slug Slug of the article to update
     * @param article Article to update
     */
    update(slug: string, article: UpdateArticleRequest): Promise<SingleArticleResponse> {
        return http.put<UpdateArticleRequest, SingleArticleResponse>(`articles/${slug}`, article);
    },

    /**
     * Delete an article. Auth is required
     * @param slug Slug of the article to delete
     */
    delete(slug: string): Promise<never> {
        return http.delete<never>(`articles/${slug}`);
    },

    /**
     * Get the comments for an article. Auth is optional
     * @param slug Slug of the article that you want to get comments for
     */
    commentsList(slug: string): Promise<MultipleCommentsResponse> {
        return http.get<never, MultipleCommentsResponse>(`articles/${slug}/comments`);
    },

    /**
     * Create a comment for an article. Auth is required
     * @param slug Slug of the article that you want to create a comment for
     * @param comment Comment you want to create
     */
    createComment(slug: string, comment: NewCommentRequest): Promise<SingleCommentResponse> {
        return http.post<NewCommentRequest, SingleCommentResponse>(`articles/${slug}/comments`, comment);
    },

    /**
     * Delete a comment for an article. Auth is required
     * @param slug Slug of the article that you want to delete a comment for
     * @param id ID of the comment you want to delete
     */
    deleteComment(slug: string, id: string): Promise<never> {
        return http.delete<never>(`articles/${slug}/comments/${id}`);
    },

    /**
     * Favorite an article. Auth is required
     * @param slug Slug of the article that you want to favorite
     */
    favorite(slug: string): Promise<SingleArticleResponse> {
        return http.post<never, SingleArticleResponse>(`articles/${slug}/favorite`);
    },

    /**
     * Unfavorite an article. Auth is required
     * @param slug Slug of the article that you want to unfavorite
     */
    unfavorite(slug: string): Promise<SingleArticleResponse> {
        return http.delete<SingleArticleResponse>(`articles/${slug}/favorite`);
    },
};
