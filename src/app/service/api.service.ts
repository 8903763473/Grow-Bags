import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  private baseUrl: any = 'https://api.growbags.co.in/';

  ContactUs(data: any) {
    return this.http.post(this.baseUrl + 'sendmail.php/', data)
  }

}
