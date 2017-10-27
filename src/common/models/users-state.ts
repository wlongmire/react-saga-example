import { User } from './user';
import { SnackbarMessage } from './snackbar-message';

export interface UsersState {
    items: Array<User>;
    isFetching: boolean;
    isCreating?: boolean;
    isUpdating?: boolean;
    snackbarMessage?: SnackbarMessage;
}