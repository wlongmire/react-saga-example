import { User } from './user';

export interface UsersState {
    isFetching: boolean;
    items: Array<User>;
    createError?: Error;
    saveError?: Error;
    fetchError?: Error;
}