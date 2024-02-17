import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  constructor(public app: AppComponent) { }


  Bags: any = [
    {
      id: 1,
      avatar: '../../assets/image/vermi.jpg',
      name: 'Vermi Bags',
      position: '01',
      message: 'Vermi bags, a sustainable gardening solution, integrate vermicomposting within grow bags.'
    },
    {
      id: 2,
      avatar: '../../assets/image/azolla.jpeg',
      name: 'Azolla Bags',
      position: '02',
      message: 'Azolla bags in grow bags enhance plant growth by providing a nutrient-rich environment and efficient water retention.'
    },
    {
      id: 3,
      avatar: '../../assets/image/260.png',
      name: '260 gsm Bags',
      position: '03',
      message: 'Utilize durable 260 gsm bags for optimal support and growth in your plant grow bags.'
    },
    {
      id: 4,
      avatar: '../../assets/image/spinach.jpeg',
      name: 'Spinach Bags',
      position: '04',
      message: 'Thriving in compact grow bags, vibrant spinach plants boast nutrient-rich leaves, offering a convenient.'
    }
  ]

  ngOnInit() {
    this.app.Headerdropdown = true;
    this.app.footer = true;
  }

}
