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
export class HttpPersonService {

    constructor(private http: HttpClient) {}

    public personList(): Observable<any> {
        return this.http.get('http://localhost:3000/person/');
    }

    public person(id: number): Observable<any> {
        return this.http.get(`http://localhost:3000/person/${id}`);
    }
}
