import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  SignIn: boolean = false;
  SignInpageId: any;
  login_Password: any;
  login_Email: any;
  formData: any = {};

  constructor(public app: AppComponent, public api: ApiService, public router: Router) {
    const Token: any = localStorage.getItem('token');
    Token ? this.router.navigate(['/home']) : null
  }

  ngOnInit() {
    this.SignIn = true;
    this.SignInpageId = 0;
    this.app.MenuOpen = false;
    this.app.Headerdropdown = false;
    this.app.footer = false;
    this.app.Header = false;
    this.formData = {};
  }

  SignUp() {
    this.SignIn = false
    this.SignInpageId = 1;
  }

  Signin() {
    this.SignIn = true
    this.SignInpageId = 0;
  }

  doLogin(event: any) {
    event.preventDefault();
    const Email = (document.getElementById('loginEmail') as HTMLInputElement)?.value;
    const Password = (document.getElementById('loginPassword') as HTMLInputElement)?.value;

    let post = {
      "email": Email,
      "password": Password,
    }
    console.log(post);

    this.api.Login(post).subscribe({
      next: ((res: any) => {
        console.log(res);
        const formattedAddress: any = {
          Street: res?.user.address.street || '',
          City: res?.user.address.city || '',
          District: res?.user.address.district || '',
          Zipcode: res?.user.address.zipcode || '',
          State: res?.user.address.state || '',
          Country: res?.user.address.country || ''
        };
        localStorage.setItem('token', res?.token);
        localStorage.setItem('role', res?.user.role);
        localStorage.setItem('phone_number', res?.user.phone_number.toString());
        localStorage.setItem('email', res?.user.email);
        localStorage.setItem('userName', res?.user.userName);
        localStorage.setItem('UserId', res?.user._id);
        localStorage.setItem('address', JSON.stringify(formattedAddress));

        this.app.showAlert('Login Successfull !', 'success', 'login');
      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  Next(event: any) {
    event.preventDefault();
    this.formData.userName = (document.getElementById('RegisterUserName') as HTMLInputElement)?.value;
    this.formData.email = (document.getElementById('RegisterEmail') as HTMLInputElement)?.value;
    this.formData.password = (document.getElementById('RegisterPassword') as HTMLInputElement)?.value;
    this.formData.phone_number = (document.getElementById('RegisterPhonenumber') as HTMLInputElement)?.value;
    this.formData.address = {};
    this.SignInpageId = 2;
  }

  back() {
    this.SignInpageId = 1
  }

  doRegister(event: any) {
    event.preventDefault();
    this.formData.address.street = (document.getElementById('RegisterStreet') as HTMLInputElement)?.value;
    this.formData.address.city = (document.getElementById('RegisterCity') as HTMLInputElement)?.value;
    this.formData.address.district = (document.getElementById('RegisterDistrict') as HTMLInputElement)?.value;
    this.formData.address.zipcode = (document.getElementById('RegisterZipcode') as HTMLInputElement)?.value;
    this.formData.address.state = (document.getElementById('RegisterState') as HTMLInputElement)?.value;
    this.formData.address.country = (document.getElementById('RegisterCountry') as HTMLInputElement)?.value;

    let post = {
      "userName": this.formData?.userName,
      "email": this.formData?.email,
      "address": {
        "street": this.formData?.address?.street,
        "city": this.formData?.address?.city,
        "zipcode": this.formData?.address?.zipcode,
        "district": this.formData?.address?.district,
        "state": this.formData?.address?.state,
        "Country": this.formData?.address?.country
      },
      "password": this.formData?.password,
      "role": 'Customer',
      "phone_number": this.formData?.phone_number
    }
    console.log(post);

    this.api.Register(post).subscribe({
      next: (res => {
        console.log(res);
        this.app.showAlert('Register Successfull !', 'success', 'register')
        // this.ngOnInit();
      }),
      error: (err => {
        console.log(err);
      })
    })
  }


}
