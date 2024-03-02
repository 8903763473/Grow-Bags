import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../service/material.module';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MaterialModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
  providers: [ApiService, HttpClient]
})
export class OurServicesComponent {

  ServiceId: any
  PopupAlert: boolean = false
  FailureAlert: boolean = false
  Showquote: boolean = false
  popupdata: any = []

  constructor(public app: AppComponent, public router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit() {
    this.app.Headerdropdown = true
    this.app.footer = true
    window?.scrollTo(0, 0);
    this.app.MenuOpen = false
    this.app.loader = true

    this.route.params.subscribe(params => {
      this.urlPath();
    });
  }

  urlPath() {
    this.ServiceId = this.route.snapshot.paramMap.get('id');
    window?.scrollTo(0, 0);
    this.app.MenuOpen = false
    this.app.loader = false
  }

  PopupAlertClose() {
    this.PopupAlert = false
    this.app.loader = true
    location.reload()
  }

  SubmitContact(Name: any, email: any, phone: any, query: any, location: any, service: any) {

    if ((Name != undefined && Name != "") && email.includes('@gmail.com') && phone.length == 10 && (location != undefined && location != "") && service != undefined && (query != undefined && query != "")) {

      let post = {
        'name': Name,
        'email': email,
        'number': phone,
        'message': query,
        'location': location,
        'service': service
      }
      console.log(post);
      this.app.loader = true

      this.api.ContactUs(post).subscribe({
        next: (res => {
          console.log('Successfully Sent', res);
          // this.handler.res('Successfully Sent')
          this.PopupAlert = true
          this.FailureAlert = false
          this.popupdata = {
            title: 'Success',
            message: 'We received your query. We will contact you soon !',
          }
          this.app.loader = false
        }),
        error: (error => {
          this.app.loader = false
          console.log('Error while Sent', error);
          // this.handler.error('Error while Sent')
          this.FailureAlert = true
          this.PopupAlert = true
          this.popupdata = {
            title: 'Failed',
            message: 'Could not sent query , Try later !',
          }
        })
      })
    }
    else {
      this.FailureAlert = true
      this.PopupAlert = true
      this.popupdata = {
        title: 'Warning',
        message: 'Fill all the fields to continue !',
      }
    }
  }

}
