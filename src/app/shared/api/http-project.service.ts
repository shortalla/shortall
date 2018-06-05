import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpProjectService {

    constructor(private http: HttpClient) {}

    public projectList(): Observable<any> {
        return this.http.get('http://localhost:3000/project/');
    }

    public project(id: number): Observable<any> {
        return this.http.get(`http://localhost:3000/project/${id}`);
    }
}
