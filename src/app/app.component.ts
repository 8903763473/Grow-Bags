import { Component, Directive, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Grow_Bags';
  OpenCart: boolean = false
  loginPop: boolean = false
  authpage: any
  SearchBox: boolean = false
  MenuOpen: boolean = false
  menuWidth = 0;
  widthChangeInterval: Subscription | undefined;
  sub: boolean = false
  OpenSubMenu: any
  isScrolled: any
  subscribe: any = 'false'
  Headerdropdown: boolean = false
  footer: boolean = false
  SubscribeMail: any
  inputValue: any
  ScreenWidth: any
  userId: any
  loader: boolean = false
  Header: boolean = false;
  constructor(public router: Router) {
    this.WidthSize()
  }

  @ViewChild(LoginComponent) login!: LoginComponent;
  @ViewChild(CartComponent) Cart!: CartComponent;

  ngOnInit() {
    this.userId = localStorage.getItem('UserId')
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      offset: 250,
      once: false, anchorPlacement: 'top-bottom'
    });
    document.addEventListener('scroll', function () {
      AOS.refresh();
    });

    this.authpage = 0
    window?.addEventListener('scroll', this.onScroll.bind(this));
  }

  showAlert(title: any, icon: any, popupName: any) {
    Swal.fire({
      title: title,
      icon: icon,
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swal2-confirm'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        if (popupName == 'login') {
          this.router.navigate(['/home']);
        } else if (popupName == 'register') {
          this.login.SignIn = true;
          this.login.formData = {};
        } else if (popupName == 'logout') {
          localStorage.clear();
          window.location.reload();
        } else if (popupName == 'cart') {
          this.Cart.getCartItem(this.userId);
        }
      } else {
        if (popupName == 'login') {
          this.router.navigate(['/home']);
        } else if (popupName == 'register') {
          this.login.SignIn = true;
          this.login.formData = {};
        } else if (popupName == 'cart') {
          this.Cart.getCartItem(this.userId);
        }
      }
    });
  }

  cart() {
    this.router.navigate(['/cart']);
  }

  WidthSize() {
    setTimeout(() => {
      this.ScreenWidthSize()
    }, 3000)
  }

  ScreenWidthSize() {
    this.ScreenWidth = window.innerWidth;
    this.WidthSize()
  }

  onScroll() {
    this.isScrolled = window?.scrollY > 0;
  }

  MenuIcon() {
    if (this.MenuOpen == true) {
      this.MenuOpen = false
      this.widthStyle('close')
    } else {
      this.MenuOpen = true;
      this.widthStyle('open')
    }
  }

  widthStyle(status: any) {
    if (status == 'close') {
      this.MenuOpen = false
    } else {
      this.MenuOpen = true
    }
    // this.menuWidth = 0;
    // if (this.widthChangeInterval) {
    //   this.widthChangeInterval.unsubscribe();
    // }

    // const targetWidth = (status === 'open' ? 300 : 0);
    // const steps = 10;
    // const duration = 100;
    // const stepSize = (targetWidth - this.menuWidth) / steps;
    // this.widthChangeInterval = interval(duration / steps).subscribe(() => {
    //   this.menuWidth += stepSize;
    //   if (
    //     (status === 'open' && this.menuWidth >= targetWidth) ||
    //     (status === 'close' && this.menuWidth <= targetWidth)
    //   ) {
    //     this.menuWidth = targetWidth;
    //     console.log(this.menuWidth);
    //     this.widthChangeInterval?.unsubscribe();
    //   }
    // });
  }

  OpencartHistory() {
    console.log('openCart');
    this.OpenCart = false
    this.OpenCart = true

    if (this.MenuOpen == true) {
      this.MenuOpen = false
      this.widthStyle('close')
    }
  }

  AuthRoute(id: any, type: any) {
    if (type == 'Icon') {
      if (this.authpage == 0) {
        this.authpage = id
        console.log(this.authpage);
      } else {
        this.authpage = 0
      }
    } else {
      this.authpage = id
    }
    console.log(this.MenuOpen);
    this.MenuOpen = false
  }

  SubMenus(id: any) {
    if (this.OpenSubMenu != id) {
      this.OpenSubMenu = id
    } else {
      this.OpenSubMenu = 0
    }
  }

  SubscribeClose() {
    sessionStorage.setItem('Subscribepopup', 'true');
    this.subscribe = true
  }

  route(data: any) {
    this.MenuOpen = false
    data != 'logout' ? this.router.navigate(['/' + data]) : this.showAlert('Are you sure to want to Logout !', 'warning', 'logout');
  }

  RouteToService(id: any) {
    console.log(id);
    this.OpenSubMenu = 0
    this.sub = false
    this.MenuOpen = false
    this.router.navigate(['ourService/' + id])
  }

  CloseLogin() {
    this.authpage = 0
  }

  footerMail(mailData: any) {
    if (mailData != undefined && mailData != "") {

    }
  }

  ngOnDestroy() {
    this.widthChangeInterval?.unsubscribe();
  }

}
