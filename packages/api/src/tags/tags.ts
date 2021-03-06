import {http} from '../_http';
import {TagsResponse} from './types';

export const tags = {
    /**
     * Get tags. Auth not required
     */
    list(): Promise<TagsResponse> {
        return http.get<never, TagsResponse>('tags');
    },
};
