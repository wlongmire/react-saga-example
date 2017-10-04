import { makeUrl, getRequestInit, BASE_URL } from '../common/service-helper';
import { AuthInfo, UserIdentity } from './reducer';

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
            console.log('login result: ', result);
            switch (result.status) {
                case 200:
                    const userIdentity = new UserIdentity(
                        result.role_id,
                        result.phone_hint,
                        result.user_id,
                        result.user_channel
                    );
                    const clientToken = result.new_client_token;
                    const authInfo = new AuthInfo(clientToken, userIdentity)
                    localStorage.setItem('access_token', clientToken);
                    localStorage.setItem('identity', JSON.stringify(userIdentity))
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
                return response.json()
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

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('identity');
    return Promise.resolve({});
}

export const isAuthenticated = () => {
    // note: this is a very naive approach. need to use json
    // web tokens to provide better assurances of token validity.
    const token = localStorage.getItem('access_token');
    return (token && token.length > 0);
}