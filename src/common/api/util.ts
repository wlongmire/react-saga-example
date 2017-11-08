import { getAuthToken } from '../../auth/util';

export const BASE_URL = `https://api.life.${process.env.CI_BRANCH}/exposed`

export const makeUrl = (basePath: string, extendedPath?: string) => {
    const host = process.env.REACT_APP_API_HOST;
    const port = process.env.REACT_APP_API_PORT;
    
    let url = `https://${host}`;

    if (port) {
        url = `${url}:${port}`;
    }

    url = `${url}/${basePath}`;

    if (extendedPath) {
        url = `${url}/${extendedPath}`;
    }

    return url;
};

export const getRequestInit = (method: string, body: any = null, useAppToken: boolean = false, contentType: string = 'application/json'): RequestInit => {
    const token = useAppToken ? process.env.REACT_APP_API_TOKEN : getAuthToken();
    const headers = new Headers({Authorization: `Token ${token}`});

    if (contentType) {
        headers.append('Content-Type', contentType);
    }

    return {
        method,
        headers,
        body,
        mode: 'cors'
    };
}