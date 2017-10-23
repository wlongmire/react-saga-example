import * as actions from './actions';
import { AuthState } from '../common';
import { default as reducer } from './reducer';

describe('auth reducer', () => {
    const initialState: AuthState = {
        isAuthenticated: false
    }

    it('should return the initial state', () => {
        expect(reducer(initialState, { type: actions.ActionType.LOGIN })).toEqual({
            isAuthenticated: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        const token = 'abacadaba';

        expect(
            reducer(initialState, {
                type: actions.ActionType.LOGIN_SUCCESS,
                value: token
            })
        ).toEqual({
            auth: 'abacadaba',
            clientToken: undefined,
            clientTokenVerificationError: undefined,
            clientTokenVerified: undefined,
            isAuthenticated: false
        });
    });

    it('should handle LOGIN_FAIL', () => {
        expect(
            reducer({ isAuthenticated: true, authError: undefined }, { 
                type: actions.ActionType.LOGIN_FAIL,
                value: 'test error'
            })).toEqual({
                isAuthenticated: false,
                authError: 'test error'
            });
    });
});