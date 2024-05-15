import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  // baseUrl : string = "http://localhost:3030/";
  baseUrl: string = "http://localhost:5656/";

  constructor(private http: HttpClient) {

  }

  postData(endPoint: string, data: any) {
    const url = this.baseUrl + endPoint;
    return this.http.post(url, data);
  }

  getData(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url);
  }

  updateData(endPoint: string, data: any) {
    const url = this.baseUrl + endPoint;
    return this.http.put(url, data);
  }

  deleteData(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.delete(url);
  }

}