import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: []
})

export class HomeComponent implements OnInit {
  ProdDetail: boolean = false
  slideIndex: any = 1
  Testimonialsindex: any = 3
  DealSlide: any = 1
  BlogsSlide: any = 1
  BlogsValue: any = 0
  BlogTransform: any
  categoryTransform: any
  categoryValue: any = 0
  TopValue: any = 0
  TopTransform: any
  ProductDetailPic: any
  BackgroundPosition = '-242px -164px';
  TrendingTab: any = 1
  BestProductTab: any = 1
  CustomerChoice: any = 1
  viewDetailImg: any = '//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0.jpg?v=1649746062'
  backgroundStyles = `url(${this.viewDetailImg})-242px -164px`
  ReviewForm: boolean = false
  BrandTransform: any
  BrandValue: any = 0

  constructor() {
    setTimeout(() => {
      this.BrandSlider();
    }, 5000);
  }

  ngOnInit() {
    this.slideIndex = 1
    this.Testimonialsindex = 3
    this.BestProductTab = 1
    this.CustomerChoice = 1
    this.BlogTransform = `translate3d(${this.BlogsValue}, 0px, 0px)`
    this.categoryTransform = `translate3d(${this.categoryValue}, 0px, 0px)`
    this.TopTransform = `translate3d(${this.TopValue}, 0px, 0px)`
  }

  TestimonialsSlider(status: any) {
    if (status == 'Prev') {
      this.Testimonialsindex = this.Testimonialsindex == 1 ? this.Testimonialsindex = 3 : this.Testimonialsindex - 1;
    }
    else if (status == 'Next') {
      this.Testimonialsindex = this.Testimonialsindex == 3 ? this.Testimonialsindex = 1 : this.Testimonialsindex + 1;
    }
  }

  SliderDotIndex(id: any) {
    this.Testimonialsindex = id
  }

  DealSlider(status: any) {
    if (status == 'Prev') {
      this.DealSlide = this.DealSlide == 1 ? this.DealSlide = 3 : this.DealSlide - 1;
    }
    else if (status == 'Next') {
      this.DealSlide = this.DealSlide == 3 ? this.DealSlide = 1 : this.DealSlide + 1;
    }
  }

  BlodSlider(status: 'Prev' | 'Next') {
    const width = window.innerWidth - 10;
    if (status === 'Prev') {
      this.BlogsValue = (this.BlogsValue === 0 || this.BlogsValue == 20) ? width : this.BlogsValue - 390;
    } else if (status === 'Next') {
      this.BlogsValue = (this.BlogsValue <= width && this.BlogsValue <= 800) ? this.BlogsValue + 390 : 0;
    }
    this.BlogTransform = `translate3d(-${this.BlogsValue}px, 0px, 0px)`;
  }


  CategorySlider(status: 'Prev' | 'Next') {
    const width = window.innerWidth + 800;
    if (status === 'Prev') {
      this.categoryValue = (this.categoryValue !== 0) ? this.categoryValue + 200 : -width;
    } else if (status === 'Next') {
      this.categoryValue = (this.categoryValue !== (-2000)) ? this.categoryValue - 200 : 0;
    }
    this.categoryTransform = `translate3d(${this.categoryValue}px, 0px, 0px)`;
  }

  TopSlider(status: 'Prev' | 'Next', Index: any) {
    const width = window.innerWidth;
    if (status === 'Prev') {
      this.slideIndex = (Index === 1) ? 6 : this.slideIndex - 1;
      this.TopValue = (Index === 1) ? -6575 : this.TopValue + 1315;
    } else if (status === 'Next') {
      this.slideIndex = (Index === 6) ? 1 : this.slideIndex + 1;
      this.TopValue = (Index === 6) ? 0 : this.TopValue - 1315;
    }
    this.TopTransform = `translate3d(${this.TopValue}px, 0px, 0px)`;
  }

  selectedZoomImg(imgUrl: any) {
    this.backgroundStyles = `url(${imgUrl})-242px -164px`
    this.BackgroundPosition = '-242px -164px';
  }

  ViewProdDetail(url: any) {
    this.ProdDetail = true
    this.ProductDetailPic = url
    console.log(url);
  }

  Trendingtabs(id: any) {
    this.TrendingTab = id
  }

  BestProd(id: any) {
    this.BestProductTab = id
  }

  Customer(id: any) {
    this.CustomerChoice = id
  }

  BrandSlider() {
    this.BrandValue = this.BrandValue + 230;
    if (this.BrandValue > window.innerWidth) {
      this.BrandValue = 0;
    }
    this.BrandTransform = `translate3d(-${this.BrandValue}px, 0px, 0px)`;
    setTimeout(() => { this.BrandSlider() }, 5000);
  }

}
