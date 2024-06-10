import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  private contactUrl: any = 'https://api.growbags.co.in/';
  public baseUrl: any = 'http://192.168.29.105:3000';


  headers: any

  Token() {
    return (this.headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }));
  }

  ContactUs(data: any) {
    return this.http.post(this.contactUrl + 'sendmail.php/', data)
  }

  Register(data: any) {
    return this.http.post(this.baseUrl + '/register', data)
  }

  Login(data: any) {
    return this.http.post(this.baseUrl + '/login', data)
  }

  AddCart(data: any) {
    // return this.http.post(this.baseUrl + '/storeInCart', data);
    const url = `${this.baseUrl}/storeInCart`;
    const headers = this.Token()
    return this.http.post(url, data, { headers });
  }

  RemoveCart(data: any) {
    return this.http.post(this.baseUrl + '/removeFromCart', data);
    // const url = `${this.baseUrl}/removeFromCart`;
    // const headers = this.Token()
    // return this.http.post(url, data, { headers });
  }

  getCartbyProdId(data: any) {
    const url = `${this.baseUrl}/payment`;
    const headers = this.Token();
    return this.http.post(url,data, { headers });
    // return this.http.get(this.baseUrl + '/getCart', data);
  }

  Checkout(data: any) {
    return this.http.post(this.baseUrl + '/checkout', data);
    // const url = `${this.baseUrl}/checkout`;
    // const headers = this.Token()
    // return this.http.post(url,data, { headers });
  }

  payment(data: any) {
    return this.http.post(this.baseUrl + '/payment', data);
    // const url = `${this.baseUrl}/payment`;
    // const headers = this.Token()
    // return this.http.post(url,data, { headers });
  }

  getAllProducts() {
    // const url = `${this.baseUrl}/admin/getAllProduct`;
    // const headers = this.Token()
    // return this.http.get(url, { headers });
    return this.http.get(this.baseUrl + '/admin/getAllProduct');
  }

  getAllcartbyuserId(user_id: any) {
    // const url = `${this.baseUrl}/getCart`;
    // const headers = this.Token()
    // return this.http.get(url, { headers });
    return this.http.get(this.baseUrl + '/getCart/' + user_id);
  }

  getAllcategory() {
    const url = `${this.baseUrl}/Admin/getAllCategory`;
    const headers = this.Token()
    return this.http.get(url, { headers });
    // return this.http.get(this.baseUrl + '/Admin/getAllCategory');
  }

  updateCheckout(data: any) {
    return this.http.get(this.baseUrl + '/updateCheckout');
    // const url = `${this.baseUrl}/updateCheckout`;
    // const headers = this.Token()
    // return this.http.put(url, data, { headers });
  }

}
