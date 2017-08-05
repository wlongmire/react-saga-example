import { makeUrl } from '../helper';

export class Api {
    
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

    private getRequest(method: string, basePath: string, urlPath?: string, body?: object ): Promise<object> {
        const headers = new Headers();
        headers.append('Authorization', 'Token abcdef123456');
        headers.append('Content-Type', 'application/json');

        const requestInit: RequestInit = {
            method,
            headers,
            mode: 'cors',
            cache: 'default'
        };
        
        const url = makeUrl(basePath);
        const request = new Request(url, requestInit);
        return fetch(request).then(response => response.json());
    }
}