import {http} from '../_http';
import {LoginUserRequest, NewUserRequest, UpdateUserRequest, UserResponse} from './types';

export const users = {
    /**
     * Login for existing user
     * @param body Credentials to use
     */
    login(body: LoginUserRequest): Promise<UserResponse> {
        return http.post<LoginUserRequest, UserResponse>(`users/login`, body);
    },

    /**
     * Gets the currently logged-in user
     */
    find(): Promise<UserResponse> {
        return http.get<never, UserResponse>(`users`);
    },

    /**
     * Register a new user
     * @param body Details of the new user to register
     */
    register(body: NewUserRequest): Promise<UserResponse> {
        return http.post<NewUserRequest, UserResponse>(`users`, body);
    },

    /**
     * Updated user information for current user
     * @param body User details to update. At least **one** field is required.
     */
    update(body: UpdateUserRequest): Promise<UserResponse> {
        return http.put<UpdateUserRequest, UserResponse>(`users`, body);
    },
};
