import * as CryptoJS from 'crypto-js';
import { makeUrl } from '../helper';

/**
 * Login Credentials
 */
export class LoginCredentials {
    public password: string;

    constructor(
        public email: string,
        password: string
    ) {
        this.password = CryptoJS.SHA224(password);
    }
}

/**
 * Login Response
 */
export class LoginResponse {
    constructor(
        public clientToken: string
        
    ) {}
}

/**
 * Service responsible for authenticating credentials via the remote auth server.
 */
export class AuthService {

    /**
     * Responsible for authenticating the specified credentials.
     * @param credentials 
     */
    static login(credentials: LoginCredentials) {
        const requestInit: RequestInit = {
            method: 'POST',
            headers: { 
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        };

        const url = makeUrl('exposed', 'register_client');
        const request = new Request(url, requestInit);

        return fetch(request)
            .then(response => response.json())
            .then(result => {
                switch (result.status) {
                    case '200':
                        localStorage.setItem('access_token', result.new_client_token);
                        // todo: id_token
                        // todo: expires_at see https://github.com/LifeCo/backend/issues/18
                        return Promise.resolve();
                    default:
                        return Promise.reject(result.error);
                }
            });
    }

    /**
     * Responsible for invalidating the current auth token.
     */
    static logout() {
        // do we need an endpoint for logging out and invalidating tokens?
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
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