import { reducer } from './reducer';
import * as actions from './actions';
import { AuthInfo } from './model';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: actions.ActionType.LOGIN })).toEqual({
            isAuthenticated: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        const authInfo: AuthInfo = {
            clientToken: '',
            userRole: 6,
            userChannel: 1
        };

        expect(
            reducer(undefined, {
                type: actions.ActionType.LOGIN_SUCCESS,
                value: authInfo
            })
        ).toEqual({
            isAuthenticated: true,
            clientToken: '',
            userRole: 6,
            userChannel: 1
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