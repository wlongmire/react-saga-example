import { makeUrl, getRequestInit, BASE_URL } from '../utils/service-util';
import { AuthInfo, Identity, IdentityUserInfo } from './reducer';

export const login = (email: string, password: string) => {
    const requestInit: RequestInit = {
        method: 'POST',
        headers: {
            'Accept-Language': `Token ${process.env.REACT_APP_API_TOKEN}`
        },
        body: JSON.stringify({
            email,
            password
        })
    };
    const url = makeUrl('exposed', 'register_client');
    const request = new Request(url, requestInit);
    return fetch(request)
        .then((response: any) => {
            if (response.ok) {
                return response.json()
            }
            else {
                return response.json().then((err: Error) => {
                    throw err;
                })
            }
        })
        .then(result => {
            switch (result.status) {
                case 200:
                    const clientToken = result.new_client_token;
                    const phoneHint = result.phone_hint;
                    const userChannel = result.user_channel;
                    const userId = Number(result.the_user);
                    const roleId = Number(result.role_id);
                    const authInfo = new AuthInfo(clientToken, userId, userChannel, phoneHint, roleId);
                    return Promise.resolve(authInfo);

                case 403:
                    const errorMessage = `We don't recognize this e-mail or password. Double-check your information and try again.`;
                    return Promise.reject(errorMessage);

                default:
                    return Promise.reject(result.error);
            }
        })
        .catch(() => {
            const errorMessage = `We don't recognize this e-mail or password. Double-check your information and try again.`;
            return Promise.reject(errorMessage);
        })
}

export const forgotPassword = (email: string) => {
    const requestInit: RequestInit = {
        method: 'POST',
        headers: {
            'Accept-Language': `Token ${process.env.REACT_APP_API_TOKEN}`
        },
        body: JSON.stringify({
            email: email
        })
    };
    const url = makeUrl('exposed', 'request_token');
    const request = new Request(url, requestInit);
    return fetch(request)
        .then((response:any) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error requesting a password reset');
            }
        })
        .then(result => {
            switch (result.status) {
                case 200:
                    return Promise.resolve();
                default:
                    return Promise.reject('Error requesting a password reset');
            }
        })
        .catch(() => {
            return Promise.reject('Error requested a password reset');
        })
}

export const verifyCode = (code: string) => {
    const requestInit = getRequestInit('POST', JSON.stringify({code}), false, 'application/json');
    return fetch(`${BASE_URL}/verify_token`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Error verifying token');
            }
            return response.json();
        }).then((result: any) => {
            switch (result.status) {
                case 202:
                    return Promise.resolve();
                default:
                    return Promise.reject('Error verifying token');
            }
        });
}

export const fetchIdentity = () => {
    const requestInit = getRequestInit('GET');
    return fetch(`${BASE_URL}/me`, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Error fetching identity');
            }
            return response.json()
        }).then((result: any) => {
            switch (result.status) {
                case 200:
                    let userInfo: IdentityUserInfo | undefined;

                    if (result.user_info) {
                        userInfo = {
                            email: result.user_info.email,
                            first: result.user_info.first,
                            last: result.user_info.last,
                            phone: result.user_info.phone,
                            // clinicId: 0,
                            // clinicianId: 0
                        } as IdentityUserInfo;
                    }

                    let identity = {
                        channelId: result.channel_id,
                        roleId: result.role_id,
                        roleName: result.role_name,
                        userId: result.user_id,
                        userInfo: userInfo
                    } as Identity;

                    return Promise.resolve(identity);
                default:
                    return Promise.reject(result.error);
            }
        })
}

// export const isAuthenticated = () => {
//     // note: this is a very naive approach. need to use json
//     // web tokens to provide better assurances of token validity.
//     const token = localStorage.getItem('access_token');
//     return (token && token.length > 0);
// }