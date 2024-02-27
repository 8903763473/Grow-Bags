import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  FirstName: any
  SecondName: any
  Email: any
  Mobile: any

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.app.Headerdropdown = true
    this.app.footer = true
    window.scrollTo(0, 0);
  }

  SubmitContact() {
    console.log(this.FirstName, this.SecondName, this.Email, this.Mobile);
  }
}
