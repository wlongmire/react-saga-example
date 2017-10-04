
export const BASE_URL = `https://${process.env.REACT_APP_API_HOST}/exposed`

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

export const getRequestInit = (method: string, body: any = null, useAppToken: boolean = false, contentType?: string): RequestInit => {
    const accessToken = useAppToken ? process.env.REACT_APP_API_TOKEN : localStorage.getItem('access_token');
    const headers = new Headers({Authorization: `Token ${accessToken}`});

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