import { User } from './user';

export interface UsersState {
    items: Array<User>;
    isFetching: boolean;
    isCreating?: boolean;
    isUpdating?: boolean;
    createError?: Error;
    fetchError?: Error;
    saveError?: Error;
}