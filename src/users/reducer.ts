import { ActionType } from './actions';
import { User, UsersState, ActionResult, SnackbarMessageType } from '../common';

function initialState(): UsersState {
    return {
        isFetching: false,
        items: []
    };
}

export default function reducer(state: UsersState = initialState(), action: ActionResult<any>) {

    switch (action.type) {
        case ActionType.CREATE_USER:
            return { 
                ...state, 
                isFetching: true, 
                snackbarMessage: undefined 
            };

        case ActionType.CREATE_USER_SUCCESS:
            const user = action.value as User;
            return { 
                ...state, 
                isFetching: false, 
                items: state.items.concat(user),
                snackbarMessage: {
                    type: SnackbarMessageType.Success,
                    message: `User ${user.firstName} ${user.lastName} added`
                }
            };

        case ActionType.CREATE_USER_FAILURE:
            return { 
                ...state, 
                isFetching: false, 
                snackbarMessage: {
                    type: SnackbarMessageType.Success,
                    message: (action.value as Error).message
                }
            };

        case ActionType.FETCH_ALL_USERS:
            return { 
                ...state, 
                isFetching: true, 
                snackbarMessage: null
            };

        case ActionType.FETCH_ALL_USERS_SUCCESS:
            return { 
                ...state, 
                isFetching: false, 
                items: action.value,
                snackbarMessage: null
            };

        case ActionType.FETCH_ALL_USERS_FAILURE:
            return { 
                ...state, 
                isFetching: false, 
                snackbarMessage: {
                    type: SnackbarMessageType.Success,
                    message: (action.value as Error).message
                }
            };

        case ActionType.UPDATE_USER:
            return { 
                ...state, 
                isFetching: true, 
                errorMessage: null,
                successMessage: null
            };

        case ActionType.UPDATE_USER_SUCCESS:
            const updated = action.value as User;
            const idx = state.items.findIndex((upUser: User) => upUser.id === updated.id );
            state.items.splice(idx, 1, updated);
            return { 
                ...state, 
                isFetching: false, 
                snackbarMessage: {
                    type: SnackbarMessageType.Success,
                    message: `User ${updated.firstName} ${updated.lastName} updated`
                }
            };

        case ActionType.UPDATE_USER_FAILURE:
            return { 
                ...state, 
                isFetching: false, 
                snackbarMessage: {
                    type: SnackbarMessageType.Success,
                    message: (action.value as Error).message
                }
            };

        case ActionType.CLEAR_SNACKBAR_MESSAGE:
            return {
                ...state,
                snackbarMessage: null
            };

        default:
            return state;
    }
}