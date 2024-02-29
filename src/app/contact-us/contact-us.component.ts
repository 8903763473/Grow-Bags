import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HandlerService } from '../service/handler.service';
import { MaterialModule } from '../service/material.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, MaterialModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [ApiService, HttpClient]
})

export class ContactUsComponent {

  PopupAlert: boolean = false
  FailureAlert: boolean = false
  popupdata: any = []

  constructor(public app: AppComponent, public api: ApiService, public handler: HandlerService) { }

  ngOnInit() {
    this.app.Headerdropdown = true
    this.app.footer = true
    window.scrollTo(0, 0);
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
        }),
        error: (error => {
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
        message: 'Fill the required fields to continue !',
      }
    }
  }

  PopupAlertClose() {
    this.PopupAlert = false
    location.reload()
  }

}
