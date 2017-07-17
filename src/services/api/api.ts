export class Api {
    static cases() {
        const api = new Api('cases');
        return api;
        // return new Api('cases');
    }
    
    constructor(private baseUrl: string) {}

    getAll() {
        return this.getRequest('GET', this.baseUrl);
    }

    get(id: number) {
        return this.getRequest('GET', this.baseUrl, id.toString());
    }

    post(body: object) {
        return this.getRequest('POST', this.baseUrl, undefined, body);
    }

    put(id: number, body: object) {
        return this.getRequest('PUT', this.baseUrl, id.toString(), body);
    }

    patch(id: number, body: object) {
        return this.getRequest('PATCH', this.baseUrl, id.toString(), body);
    }

    delete(id: number) {
        return this.getRequest('DELETE', this.baseUrl, id.toString());
    }

    private getRequest(method: string, basePath: string, urlPath?: string, body?: object, ): Promise<object> {
        const headers = new Headers();
        headers.append('Authorization', 'Token abcdef123456');
        headers.append('Content-Type', 'application/json');

        const requestInit: RequestInit = {
            method,
            headers,
            mode: 'cors',
            cache: 'default'
        };
        
        const url = this.getUrl(basePath);
        const request = new Request(url, requestInit);
        return fetch(request).then(response => response.json());
    }

    private getUrl(basePath: string, extendedPath?: string) {
        const host = process.env.REACT_APP_API_HOST;
        const port = process.env.REACT_APP_API_PORT;
        
        let url = `http://${host}`;

        if (port) {
            url = `${url}:${port}`;
        }

        url = `${url}/${basePath}`;

        if (extendedPath) {
            url = `${url}/${extendedPath}`;
        }

        return url;
    }
}