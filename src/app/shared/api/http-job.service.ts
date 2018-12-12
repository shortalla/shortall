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
export class HttpJobService {

  constructor(private http: HttpClient) {}

  public jobList(): Observable<any> {
    return this.http.get('http://localhost:3000/job/');
  }

  public job(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/job/${id}`);
  }
}
