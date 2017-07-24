import * as CryptoJS from 'crypto-js';

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
        // todo: expiresAt see https://github.com/LifeCo/backend/issues/18
    ) {}
}