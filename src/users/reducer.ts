import { ActionType } from './actions';
import { User, UsersState, ActionResult } from '../common';

function initialState(): UsersState {
    return {
        isFetching: false,
        items: []
    };
}

export default function reducer(state = initialState(), action: ActionResult<any>){

    switch(action.type){
        case ActionType.CREATE_USER:
            return { ...state, isFetching: true, createError: null};

        case ActionType.CREATE_USER_SUCCESS:
            return { ...state, isFetching: false, createError: null, items: state.items.concat(action.value)};

        case ActionType.CREATE_USER_FAILURE:
            return { ...state, isFetching: false, createError: action.value };

        case ActionType.FETCH_ALL_USERS:
            return { ...state, isFetching: true, fetchError: null};

        case ActionType.FETCH_ALL_USERS_SUCCESS:
            return { ...state, isFetching: false, fetchError: null, items: action.value};

        case ActionType.FETCH_ALL_USERS_FAILURE:
            return { ...state, isFetching: false, fetchError: action.value};

        case ActionType.UPDATE_USER:
            return { ...state, isFetching: true, fetchError: false};

        case ActionType.UPDATE_USER_SUCCESS:
            const updated = <User>action.value;
            const idx = state.items.findIndex((user: User) => user.id === updated.id );
            state.items.splice(idx, 1, updated);
            return { ...state, isFetching: false, fetchError: null};

        case ActionType.UPDATE_USER_FAILURE:
            return { ...state, isFetching: false, fetchError: action.value};

        default:
            return state;
    }
}