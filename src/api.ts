import axios, { AxiosResponse } from 'axios';

class API {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public get(route: string, ...args: any[]): Promise<AxiosResponse<any>> | undefined {
        return this.makeRequest('get', route, args);
    }

    public post(route: string, ...args: any[]) {
        return this.makeRequest('post', route, args);
    }

    public delete(route: string, ...args: any[]) {
        return this.makeRequest('delete', route, args);
    }

    public patch(route: string, ...args: any[]) {
        return this.makeRequest('patch', route, args);
    }

    public put(route: string, ...args: any[]) {
        return this.makeRequest('put', route, args);
    }

    /*
    public get(route: string, ...args: any[]): void {
        let response: any = axios.get(`${this.url}/${route}/${this.makeParams(args)}`);
        console.log("get request");
        return response;
    }
    */

    // Method to be changed - mainly for post, pacth and put methods
    private makeRequest(method: string, route: string, params: any[]) {
        const request: string = `${this.url}/${route}/${this.makeParams(params)}`;
        console.log(request);
        let response;
        if ( method === 'get' ) {
            response = axios.get(request);
        }
        if ( method === 'post' ) {
            response = axios.post(request);
        }
        if ( method === 'put' ) {
            response = axios.put(request);
        }
        if ( method === 'delete' ) {
            response = axios.delete(request);
        }
        if ( method === 'patch' ) {
            response = axios.patch(request);
        }
        // console.log(response);
        return response;
    }

    private makeParams(params: any[]): string {
        let querystr: string = "";
        params.forEach((param) => {
            querystr += param.toString() + "&";
        });
        querystr = querystr.slice(0, params.length - 2);
        return querystr;
    }
}

const api: API = new API('http://127.0.0.1:5000');
export default api;
