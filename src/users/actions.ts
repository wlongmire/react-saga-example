import { ActionResult, User } from '../common';

/**
 * Action types for Patients.
 */
export module ActionType {

    export const FETCH_ALL_USERS = 'users/FETCH_ALL_USERS';
    export const FETCH_ALL_USERS_SUCCESS = 'users/FETCH_ALL_USERS_SUCCESS';
    export const FETCH_ALL_USERS_FAILURE = 'users/FETCH_ALL_USERS_FAILURE';

    export const CREATE_USER = 'users/CREATE_USER';
    export const CREATE_USER_SUCCESS = 'users/CREATE_USER_SUCCESS';
    export const CREATE_USER_FAILURE = 'users/CREATE_USER_FAILURE';

    export const UPDATE_USER = 'users/UPDATE_USER';
    export const UPDATE_USER_SUCCESS = 'users/UPDATE_USER_SUCCESS';
    export const UPDATE_USER_FAILURE = 'users/UPDATE_USER_FAILURE';

    export const CLEAR_SNACKBAR_MESSAGE = 'users/CLEAR_SNACKBAR_MESSAGE';
}

export const clearSnackbarMessage = (): ActionResult<{}> => {
    return {
        type: ActionType.CLEAR_SNACKBAR_MESSAGE
    };
}

export const fetchAllUsers = (): ActionResult<{}> => {
    return {
        type: ActionType.FETCH_ALL_USERS
    };
}

export const fetAllUsersSuccess = (users: Array<User>): ActionResult<Array<User>> => {
    return {
        type: ActionType.FETCH_ALL_USERS_SUCCESS,
        value: users
    };
}

export const fetchAllUsersFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.FETCH_ALL_USERS_FAILURE,
        value: e
    };
}

export const createUser = (user: User): ActionResult<User> => {
    return {
        type: ActionType.CREATE_USER,
        value: user
    };
}

export const createUserSuccess = (user: User): ActionResult<User> => {
    return {
        type: ActionType.CREATE_USER_SUCCESS,
        value: user
    };
}

export const createUserFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.CREATE_USER_FAILURE,
        value: e
    };
}

export const updateUser = (user: User): ActionResult<User> => {
    return {
        type: ActionType.UPDATE_USER,
        value: user
    };
}

export const updateUserSuccess = (user: User): ActionResult<User> => {
    return {
        type: ActionType.UPDATE_USER_SUCCESS,
        value: user
    };
}

export const updateUserFailure = (e: Error): ActionResult<Error> => {
    return {
        type: ActionType.UPDATE_USER_FAILURE,
        value: e
    };
}