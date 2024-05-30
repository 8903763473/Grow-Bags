import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  SignIn: boolean = false;
  SignInpageId: any

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.SignIn = true;
    this.SignInpageId = 0;
    this.app.MenuOpen = false
    this.app.Headerdropdown = false
    this.app.footer = false
    this.app.Header = false
    // this.loadExternalScripts();
  }

  // loadExternalScripts() {
  //   this.loadScript('../../assets/login/vendor/jquery/jquery-3.2.1.min.js');
  //   this.loadScript('../../assets/login/vendor/animsition/js/animsition.min.js');
  //   this.loadScript('../../assets/login/vendor/bootstrap/js/popper.js');
  //   this.loadScript('../../assets/login/vendor/bootstrap/js/bootstrap.min.js');
  //   this.loadScript('../../assets/login/vendor/select2/select2.min.js');
  //   this.loadScript('../../assets/login/vendor/daterangepicker/moment.min.js');
  //   this.loadScript('../../assets/login/vendor/daterangepicker/daterangepicker.js');
  //   this.loadScript('../../assets/login/vendor/countdowntime/countdowntime.js');
  //   this.loadScript('../../assets/login/js/main.js');
  // }

  // loadScript(url: string) {
  //   const body = document.body as HTMLDivElement;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }

  SignUp() {
    this.SignIn = false
    this.SignInpageId = 1;
  }

  Signin() {
    this.SignIn = true
    this.SignInpageId = 0;
  }

  Next() {
    this.SignInpageId = 2
  }

  back(){
    this.SignInpageId = 1
  }

}
