import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(API_URL);
  }

  getPublicEmployees(multi: any): Observable<any> {
    return this.http.get(API_URL+ '/public?q=' + multi);
  }

  getAllSearchEmployees(searchTerm : string): Observable<any> {
    return this.http.get(API_URL + '/search?q='+searchTerm );
  }

  getAllEmployeesById(id:any): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  updateEmployee(data:any, id:any): Observable<any>{
    return this.http.put(API_URL + '/' + id, data);
  }

  deleteEmployee(data:any, id:any): Observable<any>{
    console.log(id)
    return this.http.delete(API_URL + '/' + id, {body: data});
  }

  createEmployee(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

   uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post( 'http://localhost:8080/api/file/upload', formData);
  }

  uploadVideo(video: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', video);
    return this.http.post( 'http://localhost:8080/api/file/upload', formData);
  }
  uploadCv(cv: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', cv);
    return this.http.post( 'http://localhost:8080/api/file/upload', formData);
  }
}
