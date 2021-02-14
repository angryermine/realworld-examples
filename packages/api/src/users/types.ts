import {User} from '../types';

export type LoginUser = {
    email: string;
    password: string;
};

export type LoginUserRequest = {
    user: LoginUser;
};

export type UserResponse = {
    user: User;
};

export type NewUser = {
    username: string;
    email: string;
    password: string;
};

export type NewUserRequest = {
    user: NewUser;
};

export type UpdateUser = {
    email?: string;
    token?: string;
    username?: string;
    bio?: string;
    image?: string;
};

export type UpdateUserRequest = {
    user: UpdateUser;
};
