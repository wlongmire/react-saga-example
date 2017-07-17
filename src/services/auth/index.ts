import * as Redux from 'react-redux';
import { EventEmitter } from 'events';
import { History } from 'history';

export default class Auth extends EventEmitter {
    userProfile: object | undefined | null;

    constructor(
        private store: Redux.Store<{}>, 
        private history: History) {

        super();

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login() {
        this.store.dispatch
    }

    handleAuthentication() {
        // handle the authentication
    }

    setSession(authResult: object) {

    }

    getAccessToken() {

    }

    getProfile() {

    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.userProfile = null;

        // navigate to the home route here
        this.history.push('home');
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at') || '');
        return new Date().getTime() < expiresAt;
    }
}