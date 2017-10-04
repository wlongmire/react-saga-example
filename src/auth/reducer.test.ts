import { default as reducer, AuthInfo, UserIdentity } from './reducer';
import * as actions from './actions';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: actions.ActionType.LOGIN })).toEqual({
            isAuthenticated: false
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        const userIdentity: UserIdentity = {
            roleId: 6,
            phoneHint: '71',
            userId: 1,
            userChannel: 1
        };

        const authInfo: AuthInfo = {
            clientToken: 'abacadaba',
            userIdentity
        };

        expect(
            reducer(undefined, {
                type: actions.ActionType.LOGIN_SUCCESS,
                value: authInfo
            })
        ).toEqual({
            isAuthenticated: false,
            clientToken: 'abacadaba',
            userIdentity: {
                roleId: 6,
                phoneHint: '71',
                userId: 1,
                userChannel: 1
            }
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