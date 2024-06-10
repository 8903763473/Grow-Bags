import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  ChoosePayment: boolean = false;
  ExistingAddress: any;
  Phone_number: any;
  UserName: any;
  email: any;
  paymentMode: any;
  selectedCountry: any;
  formData: any = {};
  userId: any;
  myCartItems: any = [];
  TotalAmount: any;

  constructor(public app: AppComponent, public router: Router, public api: ApiService) { }

  ngOnInit() {
    const Address: any = localStorage.getItem('address');
    this.ExistingAddress = JSON.parse(Address);
    this.formData = {
      Street: this.ExistingAddress.Street,
      City: this.ExistingAddress.City,
      District: this.ExistingAddress.District,
      Zipcode: this.ExistingAddress.Zipcode,
      State: this.ExistingAddress.State,
      Country: this.ExistingAddress.Country,
      Phone_number: localStorage.getItem('phone_number'),
      UserName: localStorage.getItem('userName'),
      email: localStorage.getItem('email')
    }
    this.app.MenuOpen = false;
    this.app.Headerdropdown = true;
    this.app.footer = true;
    this.app.Header = true;
    this.userId = localStorage.getItem('UserId')
    // this.getCartItem(this.userId);
    this.getCartFromLocal()
  }

  getCartFromLocal() {
    const cartItem: any = localStorage.getItem('cartItem');
    this.myCartItems = JSON.parse(cartItem);
    this.TotalAmount = this.calculateTotalPrice();
  }

  // getCartItem(userId: any) {
  //   this.api.getAllcartbyuserId(userId).subscribe({
  //     next: ((res: any) => {
  //       console.log(res);
  //       this.myCartItems = res;
  //       this.TotalAmount = this.calculateTotalPrice();
  //     }), error: (err => {
  //       console.log(err);
  //     })
  //   })
  // }

  calculateTotalPrice() {
    return this.myCartItems.reduce((total: number, item: any) => {
      const pricePerItem = total + (item.price / item.quantity)
      return (pricePerItem * item.quantity);
    }, 0);
  }

  choosePayment() {
    this.ChoosePayment = true
  }

  paymentModeChange(data: any) {
    this.paymentMode = data.target.value;
  }

  countryChange(event: any): any {
    this.selectedCountry = event.target.value;
  }

  doCheckout() {
    this.app.loader = true;
    this.formData.Street = (document.getElementById('Street') as HTMLInputElement)?.value;
    this.formData.City = (document.getElementById('City') as HTMLInputElement)?.value;
    this.formData.District = (document.getElementById('District') as HTMLInputElement)?.value;
    this.formData.Zipcode = (document.getElementById('Zipcode') as HTMLInputElement)?.value;
    this.formData.State = (document.getElementById('State') as HTMLInputElement)?.value;
    this.formData.Country = (document.getElementById('Country') as HTMLInputElement)?.value;

    let post = {
      "user_id": this.userId,
      "paymentMode": this.paymentMode,
      "phone_number": this.formData.Phone_number,
      "address": {
        "street": this.formData.Street,
        "city": this.formData.City,
        "district": this.formData.District,
        "zipcode": this.formData.Zipcode,
        "state": this.formData.State,
        "country": this.selectedCountry == undefined ? this.formData.Country : this.selectedCountry,
      }
    }

    console.log(post);

    this.api.Checkout(post).subscribe({
      next: (res => {
        console.log(res);
        this.Createpayment(post.address)
      }), error: (err => {
        console.log(err);
        this.app.loader = false;
      })
    })
  }

  Createpayment(data: any) {
    let post = {
      "amount": this.TotalAmount,
      "contact": this.formData.Phone_number,
      "name": this.formData.UserName,
      "email": this.formData.email
    };

    this.api.payment(post).subscribe({
      next: (res => {
        console.log(res);
        const msg = `Successfully Paid,  ${this.TotalAmount}`
        this.app.showAlert(msg, 'success', 'pay');
        this.myCartItems = [];
        // window.location.reload();
        // this.router.navigate(['/home']);
        // this.app.loader = false;
        this.updateCheckout(res)
      }),
      error: (err => {
        console.log(err);
        this.app.showAlert('Error while payment', 'error', 'pay');
        this.app.loader = false;
      })
    })
  }

  updateCheckout(data: any) {
    let post = {
      "checkout_id": data?.checkout_id,
      "razorpay_payment_id": data?.razorpay_payment_id,
      "razorpay_order_id": data?.razorpay_order_id,
      "paymentStatus": data?.paymentStatus
    }
    console.log(post);

    this.api.updateCheckout(post).subscribe({
      next: ((res: any) => {
        console.log(res);
        console.log('Checkout Updated !');       
      }), error: ((err: any) => {
        console.log(err);
      })
    });
  }

  ngOnDestroy() {
    localStorage.removeItem('cartItem');
  }

}
