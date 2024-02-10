import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  slideIndex: any = 1

  ngOnInit() {
    this.slideIndex = 1
  }

  OwlStyle() {
    // return { 'transform': 'translate3d(-3108px, 0px, 0px)', 'transition': 'all 0.5s ease 0s; width: 6216px'};
  }

  SlideMode(id: any, status: any) {
    if (status == 'prev') {
      if (id == 1) {
        this.slideIndex = 6
      } else {
        this.slideIndex = this.slideIndex - 1
      }
      console.log(this.slideIndex);
    } else if (status == 'next') {
      if (id == 6) {
        this.slideIndex = 1
      } else {
        this.slideIndex = this.slideIndex + 1
      }
      console.log(this.slideIndex);
    }
  }

}
