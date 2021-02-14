import {http} from '../_http';
import {ProfileResponse} from './types';

export const profies = {
    /**
     * Get a profile of a user of the system. Auth is optional
     * @param username Username of the profile to get
     */
    find(username: string) {
        return http.get<never, ProfileResponse>(`profiles/${username}`);
    },

    /**
     * Follow a user by username
     * @param username Username of the profile you want to follow
     */
    follow(username: string) {
        return http.post<never, ProfileResponse>(`profiles/${username}/follow`);
    },

    /**
     * Unfollow a user by username
     * @param username Username of the profile you want to unfollow
     */
    unfollow(username: string) {
        return http.delete<ProfileResponse>(`profiles/${username}/follow`);
    },
};
