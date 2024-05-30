import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.app.MenuOpen = false
    this.app.Headerdropdown = true
    this.app.footer = true
    this.app.Header = true
  }

}
