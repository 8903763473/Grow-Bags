import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import Swal, { SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  userId: any;
  TotalAmount: any;
  myCartItems: any = [];

  constructor(public app: AppComponent, public router: Router, public api: ApiService) { }

  ngOnInit() {
    this.app.MenuOpen = false;
    this.app.Headerdropdown = true;
    this.app.footer = true;
    this.app.Header = true;
    this.userId = localStorage.getItem('UserId')
    this.getCartItem(this.userId);
  }

  goToCheckOut() {
    console.log(this.myCartItems);
    localStorage.setItem('cartItem', JSON.stringify(this.myCartItems));
    this.router.navigate(['/checkout'])
  }

  getCartItem(userId: any) {
    this.api.getAllcartbyuserId(userId).subscribe({
      next: ((res: any) => {
        console.log(res);
        this.myCartItems = [];
        this.myCartItems = res;
        this.TotalAmount = this.calculateTotalPrice();
      }), error: (err => {
        console.log(err);
      })
    })
  }

  calculateTotalPrice() {
    return this.myCartItems.reduce((total: number, item: any) => {
      const pricePerItem = total + (item.price / item.quantity);
      console.log(item, pricePerItem);
      return (pricePerItem * item.quantity);
    }, 0);
  }

  RemoveItem(data: any) {
    let post = {
      "user_id": this.userId,
      "cart_id": data._id
    }
    this.api.RemoveCart(post).subscribe({
      next: (res => {
        console.log(res);
        this.showAlert('Removed from Cart', 'success', 'cart');
      }), error: (err => {
        console.log(err);
        this.showAlert('Error while Remove Cart', 'error', 'cart');
      })
    })
  }

  decreaseQuantity(data: any) {
    this.myCartItems = this.myCartItems.map((res: any) => {
      if (data.product_id == res.product_id && res.quantity > 0) {
        const pricePerItem = res.price / res.quantity;
        const newQuantity = res.quantity - 1;
        const newPrice = pricePerItem * newQuantity;
        return { ...res, quantity: newQuantity, price: newPrice };
      }
      return res;
    });
    this.TotalAmount = this.calculateTotalPrice();
  }

  increaseQuantity(data: any) {
    this.myCartItems = this.myCartItems.map((res: any) => {
      if (data.product_id == res.product_id) {
        const pricePerItem = res.price / res.quantity;
        const newQuantity = res.quantity + 1;
        const newPrice = pricePerItem * newQuantity;
        return { ...res, quantity: newQuantity, price: newPrice };
      }
      return res;
    });
    this.TotalAmount = this.calculateTotalPrice();
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
        if (popupName == 'cart') {
          this.getCartItem(this.userId);
        }
      } else {
        if (popupName == 'cart') {
          this.getCartItem(this.userId);
        }
      }
    });
  }

}
