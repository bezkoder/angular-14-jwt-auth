import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://34.118.90.212/api/subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  createSubcriber(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

}
