import { AuthInfo } from '../auth';

export const getAuthToken = () => {
    const authString = localStorage.getItem('auth');
    if (authString) {
        const auth = JSON.parse(authString) as AuthInfo;
        return auth.clientToken;
    }
    return null;
}

export const isAuthenticated = () => {
    return getAuthToken() != null;
}