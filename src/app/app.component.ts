import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription, interval } from 'rxjs';

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
  subscribe: any
  Headerdropdown: boolean = false
  footer: boolean = false
  SubscribeMail: any
  inputValue: any

  constructor(public router: Router) { }

  ngOnInit() {
    this.authpage = 0
    window?.addEventListener('scroll', this.onScroll.bind(this));
    this.subscribe = sessionStorage.getItem('Subscribepopup');
  }

  onScroll() {
    this.isScrolled = window.scrollY > 0;
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
    this.router.navigate(['/' + data])
  }

  RouteToService(id: any) {
    console.log(id);    
    this.router.navigate(['ourService/' + id])
  }

  CloseLogin() {
    this.authpage = 0
  }

  ngOnDestroy() {
    this.widthChangeInterval?.unsubscribe();
  }

}
