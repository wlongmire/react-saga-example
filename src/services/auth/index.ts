import { makeUrl } from '../helper';

/**
 * Login Credentials
 */
export class AuthLoginCredentials {
    constructor(
        public email: string,
        public password: string
    ) { }
}

/**
 * Login Response
 */
export class AuthLoginResponse {
    constructor(
        public clientToken: string,
        public userRole: number,
        public userChannel: number
    ) { }
}

/**
 * Service responsible for authenticating credentials via the remote auth server.
 */
export class AuthService {

    /**
     * Responsible for authenticating the specified credentials.
     * @param credentials 
     */
    static login(credentials: AuthLoginCredentials) {
        const requestInit: RequestInit = {
            method: 'POST',
            headers: {
                'Accept-Language': `Token ${process.env.REACT_APP_API_TOKEN}`
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
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
                        localStorage.setItem('access_token', result.new_client_token);
                        localStorage.setItem('role_id', result.role_id);
                        localStorage.setItem('user_channel', result.user_channel);
                        return Promise.resolve(new AuthLoginResponse(
                            result.new_client_token,
                            result.role_id,
                            result.user_channel
                        ));
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

    static forgotPassword(email: string) {
        return Promise.resolve();
        // const requestInit: RequestInit = {
        //     method: 'POST',
        //     headers: {
        //         'Accept-Language': `Token ${process.env.REACT_APP_API_TOKEN}`
        //     },
        //     body: JSON.stringify({
        //         email: email
        //     })
        // };
        // const url = makeUrl('exposed', 'request_token');
        // const request = new Request(url, requestInit);
        // return fetch(request)
        //     .then((response:any) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             throw new Error('Error requesting a password reset');
        //         }
        //     })
        //     .then(result => {
        //         switch (result.status) {
        //             case 200:
        //                 return Promise.resolve();
        //             default:
        //                 return Promise.reject('Error requesting a password reset');
        //         }
        //     })
        //     .catch(() => {
        //         return Promise.reject('Error requested a password reset');
        //     })
    }

    /**
     * Responsible for invalidating the current auth token.
     */
    static logout() {
        // do we need an endpoint for logging out and invalidating tokens?
        localStorage.removeItem('access_token');
        localStorage.removeItem('role_id');
        localStorage.removeItem('user_channel');
        return Promise.resolve({});
    }

    static isAuthenticated() {
        // note: this is a very naive approach. need to use json
        // web tokens to provide better assurances of token validity.
        const token = localStorage.getItem('access_token');
        return (token && token.length > 0);

        // todo: 
        // let expiresAt = localStorage.getItem('expires_at');
        // return new Date().getTime() < expiresAt;
    }
}
