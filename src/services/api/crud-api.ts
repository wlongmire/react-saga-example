import { createRequest } from '../utils';

export class CrudApi {
    constructor(private baseUrl: string) {}

    getAll() {
        return createRequest('GET', this.baseUrl);
    }

    get(id: number) {
        return createRequest('GET', this.baseUrl, id.toString());
    }

    post(body: object) {
        return createRequest('POST', this.baseUrl, undefined, body);
    }

    put(id: number, body: object) {
        return createRequest('PUT', this.baseUrl, id.toString(), body);
    }

    patch(id: number, body: object) {
        return createRequest('PATCH', this.baseUrl, id.toString(), body);
    }

    delete(id: number) {
        return createRequest('DELETE', this.baseUrl, id.toString());
    }
}