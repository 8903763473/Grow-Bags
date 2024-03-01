import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  ServiceId: any

  constructor(public app: AppComponent, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.app.Headerdropdown = true
    this.app.footer = true
    window?.scrollTo(0, 0);
    this.app.MenuOpen = false

    this.route.params.subscribe(params => {
      this.urlPath();
    });
  }

  urlPath() {
    this.ServiceId = this.route.snapshot.paramMap.get('id');
    window?.scrollTo(0, 0);
    this.app.MenuOpen = false
  }

}
