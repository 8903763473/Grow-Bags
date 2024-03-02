import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


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
  ProductDetailPic: any = []
  BackgroundPosition = '-242px -164px';
  TrendingTab: any = 1
  BestProductTab: any = 1
  CustomerChoice: any = 1
  viewDetailImg: any = '//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0.jpg?v=1649746062'
  backgroundStyles = `url(${this.viewDetailImg})-242px -164px`
  ReviewForm: boolean = false
  BrandTransform: any
  BrandValue: any = 0
  sliderWidth: any
  screenWidth: any

  ProductList: any = [
    {
      id: 1,
      img: '../../assets/image/grow-bags-outline.png',
      img_select: '../../assets/image/grow-bags-outline-white.png',
      name: 'Grow Bags'
    },
    {
      id: 2,
      img: '../../assets/image/drip-outline.png',
      img_select: '../../assets/image/drip-outline-white.png',
      name: 'Drip Irrigation'
    },
    {
      id: 3,
      img: '../../assets/image/garden-outline.png',
      img_select: '../../assets/image/garden-outline-white.png',
      name: 'Garden designing'
    },
    {
      id: 4,
      img: '../../assets/image/organic-outline.png',
      img_select: '../../assets/image/organic-outline-white.png',
      name: 'Organic Farming'
    }
  ]



  FirstTabProducts: any = [
    {
      id: 1,
      img: '../../assets/image/plant1.png',
      size: '8 × 3 inch'
    },
    {
      id: 2,
      img: '../../assets/image/plant2.png',
      size: '10 × 10 inch'
    },
    {
      id: 3,
      img: '../../assets/image/plant3.png',
      size: '15 × 15 inch'
    },
    {
      id: 4,
      img: '../../assets/image/plant4.png',
      size: '18 × 10 inch'
    },
    {
      id: 5,
      img: '../../assets/image/plant5.png',
      size: '18 × 18 inch'
    },
    {
      id: 6,
      img: '../../assets/image/plant6.png',
      size: '11 × 8 inch'
    },
    {
      id: 7,
      img: '../../assets/image/plant7.jpg',
      size: '16 × 13 inch'
    },
    {
      id: 8,
      img: '../../assets/image/plant8.png',
      size: '12 × 10 inch'
    },
    {
      id: 9,
      img: '../../assets/image/plant9.png',
      size: '18 × 13 inch'
    },
  ]


  SecondTabProducts: any = [
    {
      id: 1,
      img: '../../assets/image/Drip1.png',
      size: ''
    },
    {
      id: 2,
      img: '../../assets/image/Drip2.jpg',
      size: ''
    },
    {
      id: 3,
      img: '../../assets/image/Drip3.jpg',
      size: ''
    },
    {
      id: 4,
      img: '../../assets/image/Drip4.png',
      size: ''
    },
    {
      id: 5,
      img: '../../assets/image/Drip5.jpg',
      size: ''
    },
    {
      id: 6,
      img: '../../assets/image/Drip6.jpg',
      size: ''
    },
    {
      id: 7,
      img: '../../assets/image/Drip7.jpg',
      size: ''
    },
    {
      id: 8,
      img: '../../assets/image/Drip8.jpg',
      size: ''
    },
    {
      id: 9,
      img: '../../assets/image/Drip1.png',
      size: ''
    },
  ]

  ThirdTabProducts: any = [
    {
      id: 1,
      img: '../../assets/image/Garden-Design1.jpg',
      size: ''
    },
    {
      id: 2,
      img: '../../assets/image/Garden-Design2.jpg',
      size: ''
    },
    {
      id: 3,
      img: '../../assets/image/Garden-Design3.jpg',
      size: ''
    },
    {
      id: 4,
      img: '../../assets/image/Garden-Design4.jpg',
      size: ''
    },
    {
      id: 5,
      img: '../../assets/image/Garden-Design5.jpg',
      size: ''
    },
    {
      id: 6,
      img: '../../assets/image/Garden-Design6.jpg',
      size: ''
    },
    {
      id: 7,
      img: '../../assets/image/Garden-Design7.jpg',
      size: ''
    },
    {
      id: 8,
      img: '../../assets/image/Garden-Design8.jpg',
      size: ''
    },
    {
      id: 9,
      img: '../../assets/image/Garden-Design9.jpeg',
      size: ''
    },
  ]

  FourthTabProducts: any = [
    {
      id: 1,
      img: '../../assets/image/organic1.jpg',
      size: ''
    },
    {
      id: 2,
      img: '../../assets/image/organic2.jpg',
      size: ''
    },
    {
      id: 3,
      img: '../../assets/image/organic3.jpg',
      size: ''
    },
    {
      id: 4,
      img: '../../assets/image/organic4.jpg',
      size: ''
    },
    {
      id: 5,
      img: '../../assets/image/organic5.png',
      size: ''
    },
    {
      id: 6,
      img: '../../assets/image/organic6.jpg',
      size: ''
    },
    {
      id: 7,
      img: '../../assets/image/organic7.jpg',
      size: ''
    },
    {
      id: 8,
      img: '../../assets/image/organic8.jpeg',
      size: ''
    },
    {
      id: 9,
      img: '../../assets/image/organic9.png',
      size: ''
    },
  ]


  SliderData: any = [
    {
      id: 1,
      img: '../../assets/image/topSlider.jpeg',
      title: 'Rubber Plant',
      paragraph: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print. The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
      id: 2,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/slider-2_2048x_204af0c6-e02f-4050-9715-78635c134f7e.png?v=1649651633',
      title: 'Outdoor Plant',
      paragraph: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print. The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
      id: 3,
      img: '../../assets/image/topSlider.jpeg',
      title: 'Rubber Plant',
      paragraph: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print. The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
      id: 4,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/slider-2_2048x_204af0c6-e02f-4050-9715-78635c134f7e.png?v=1649651633',
      title: 'Outdoor Plant',
      paragraph: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print. The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
      id: 5,
      img: '../../assets/image/topSlider.jpeg',
      title: 'Rubber Plant',
      paragraph: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text in laying out print. The passage is attributed to an unknown typesetter in the 15th century.'
    },
  ]

  WidthSize: any
  ActiveSlide: any = 1

  constructor(public app: AppComponent) {
    setTimeout(() => {
      this.BrandSlider();
    }, 5000);
    window?.scrollTo(0, 0);

    setTimeout(() => {
      this.ScreenWidthSize()
    }, 500);
  }

  ngOnInit() {
    this.app.MenuOpen = false
    this.app.Headerdropdown = true
    this.app.footer = true
    this.slideIndex = 1
    this.Testimonialsindex = 3
    this.BestProductTab = 1
    this.CustomerChoice = 1
    this.BlogTransform = `translate3d(${this.BlogsValue}, 0px, 0px)`
    this.categoryTransform = `translate3d(${this.categoryValue}, 0px, 0px)`
    this.TopTransform = `translate3d(${this.TopValue}, 0px, 0px)`
    this.Width();
    this.ActiveSlide = 1
  }


  ScreenWidthSize() {
    this.WidthSize = (window.innerWidth + 115)
    console.log(this.WidthSize, window.innerWidth);
    setTimeout(() => {
      this.ScreenWidthSize();
    }, 500)
  }

  Width() {
    setTimeout(() => {
      this.ScreenWidth();
    }, 2000)
  }

  ScreenWidth() {
    this.screenWidth = window?.innerWidth;
    this.Width();
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
    const width = window?.innerWidth - 10;
    if (status === 'Prev') {
      this.BlogsValue = (this.BlogsValue === 0 || this.BlogsValue == 20) ? width : this.BlogsValue - 390;
    } else if (status === 'Next') {
      this.BlogsValue = (this.BlogsValue <= width && this.BlogsValue <= 800) ? this.BlogsValue + 390 : 0;
    }
    this.BlogTransform = `translate3d(-${this.BlogsValue}px, 0px, 0px)`;
  }

  CategorySlider(status: 'Prev' | 'Next') {
    const width = window?.innerWidth + 800;
    if (status === 'Prev') {
      this.categoryValue = (this.categoryValue !== 0) ? this.categoryValue + 200 : -width;
    } else if (status === 'Next') {
      this.categoryValue = (this.categoryValue !== (-2000)) ? this.categoryValue - 200 : 0;
    }
    this.categoryTransform = `translate3d(${this.categoryValue}px, 0px, 0px)`;
  }

  TopSlider(status: 'Prev' | 'Next', Index: any) {
    const width = (this.WidthSize);
    console.log(Index);    
    if (status === 'Prev' && this.TopValue != 0) {
      this.slideIndex = (Index === 1) ? 6 : this.slideIndex - 1;
      this.TopValue = (Index === 1) ? -(0) : this.TopValue + width;
    } else if (status === 'Next' && Index !== 6) {
      this.slideIndex = (Index === 6) ? 1 : this.slideIndex + 1;
      this.TopValue = (Index === 6) ? 0 : this.TopValue - width;
    }
    this.TopTransform = `translate3d(${this.TopValue}px, 0px, 0px)`;
  }

  selectedZoomImg(imgUrl: any) {
    this.backgroundStyles = `url(${imgUrl})-242px -164px`
    this.BackgroundPosition = '-242px -164px';
  }

  ViewProdDetail(item: any) {
    this.ProdDetail = true
    this.ProductDetailPic = item
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
    if (this.BrandValue > window?.innerWidth) {
      this.BrandValue = 0;
    }
    this.BrandTransform = `translate3d(-${this.BrandValue}px, 0px, 0px)`;
    setTimeout(() => { this.BrandSlider() }, 5000);
  }
}
