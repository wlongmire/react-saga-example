import { default as reducer } from './reducer';
import * as actions from './actions';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: actions.ActionType.LOGIN })).toEqual({
            isAuthenticated: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        const token = 'abacadaba';

        expect(
            reducer(undefined, {
                type: actions.ActionType.LOGIN_SUCCESS,
                value: token
            })
        ).toEqual({
            isAuthenticated: false,
            clientToken: 'abacadaba',
            
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