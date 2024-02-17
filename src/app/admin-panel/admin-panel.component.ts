import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})

export class AdminPanelComponent {

  tab: any = 1
  checkId: any = 0
  DeleteAlert: boolean = false
  Edit: boolean = false
  deleteList: any = []
  TrendingTab: any = 1

  AllCategories: any = [
    {
      id: 1,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category3_fb918252-edb5-4bd7-a34f-451eb70d7e6b.png?v=1649656016',
      name: 'Peace Lily'
    },
    {
      id: 2,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category5_f91d6095-a5d9-4ec0-9d1f-093cd1cee065.png?v=1649656016',
      name: 'Jade Plant'
    },
    {
      id: 3,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category5_f91d6095-a5d9-4ec0-9d1f-093cd1cee065.png?v=1649656016',
      name: 'Alovera Plant'
    },
    {
      id: 4,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category9.png?v=1649656016',
      name: 'Orchid Plant'
    },
    {
      id: 5,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category1_698a4bba-0789-499a-a7f4-8519b274d1a0.png?v=1649656016',
      name: 'Cactus Plant'
    },
    {
      id: 6,
      img: '//fashionist-ishi-2.myshopify.com/cdn/shop/files/category3_fb918252-edb5-4bd7-a34f-451eb70d7e6b.png?v=1649656016',
      name: 'Peace Lily'
    }
  ]

  TrendingTabs = [
    { id: 1, name: 'Cactus Plant', imgUrl: 'productcategory1-1.png', hoverImgUrl: 'productcategory1.png' },
    { id: 2, name: 'Jade Plant', imgUrl: 'productcategory3.png', hoverImgUrl: 'productcategory3-1.png' },
    { id: 3, name: 'Peace Lily', imgUrl: 'productcategory2.png', hoverImgUrl: 'productcategory2-1.png' },
    { id: 4, name: 'Aloe Vera Plant', imgUrl: 'productcategory5.png', hoverImgUrl: 'productcategory5-1.png' }
  ];


  TrendingProducts1: any = [
    {
      id: 1,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25_165x.jpg?v=1649746018 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25_360x.jpg?v=1649746018 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25_533x.jpg?v=1649746018 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25_720x.jpg?v=1649746018 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25_940x.jpg?v=1649746018 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25.jpg?v=1649746018 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_b50ba8a8-71f2-4225-9b00-0f7809570a25.jpg?v=1649746018',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984_165x.jpg?v=1649746018 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984_360x.jpg?v=1649746018 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984_533x.jpg?v=1649746018 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984_720x.jpg?v=1649746018 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984_940x.jpg?v=1649746018 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984.jpg?v=1649746018 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_0238207e-5907-4087-aef3-4b868ade8984.jpg?v=1649746018',
      outstock: 'Sold out',
      name: 'Ligula convallis',
      RegularPrice: '$60.00',
      salePrice: '$60.00'
    },
    {
      id: 2,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07_165x.jpg?v=1649746034 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07_360x.jpg?v=1649746034 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07_533x.jpg?v=1649746034 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07_720x.jpg?v=1649746034 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07_940x.jpg?v=1649746034 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07.jpg?v=1649746034 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_48f9479f-9a84-4f86-a6b0-28e5a8af7b07.jpg?v=1649746034',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64_165x.jpg?v=1698058196 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64_360x.jpg?v=1698058196 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64_533x.jpg?v=1698058196 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64_720x.jpg?v=1698058196 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64_940x.jpg?v=1698058196 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64.jpg?v=1698058196 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_98c7a993-2b89-4ff8-bd95-03c96671cc64.jpg?v=1698058196',
      outstock: false,
      name: 'Pellentesque',
      RegularPrice: '$72.00',
      salePrice: '$72.00'
    },
    {
      id: 3,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7_165x.jpg?v=1649745996 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7_360x.jpg?v=1649745996 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7_533x.jpg?v=1649745996 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7_720x.jpg?v=1649745996 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7_940x.jpg?v=1649745996 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7.jpg?v=1649745996 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_219e1b37-07db-43e0-b920-b3a163abb8a7.jpg?v=1649745996',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019_165x.jpg?v=1649745996 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019_360x.jpg?v=1649745996 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019_533x.jpg?v=1649745996 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019_720x.jpg?v=1649745996 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019_940x.jpg?v=1649745996 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019.jpg?v=1649745996 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/13_4cedad1b-3c25-4a52-928b-c7cdfd300019.jpg?v=1649745996',
      outstock: false,
      name: 'Chiffon Dress',
      RegularPrice: '$27.00',
      salePrice: '$27.00'
    },
    {
      id: 4,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_165x.jpg?v=1649746048",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e.jpg?v=1649746048",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_165x.jpg?v=1649746047",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575.jpg?v=1649746047",
      outstock: false,
      name: "printed cutting skirt",
      RegularPrice: "$15.00",
      salePrice: "$15.00"
    },
    {
      id: 5,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4_165x.jpg?v=1649746076 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4_360x.jpg?v=1649746076 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4_533x.jpg?v=1649746076 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4_720x.jpg?v=1649746076 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4_940x.jpg?v=1649746076 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4.jpg?v=1649746076 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_d2c98d90-3f54-452c-a3e1-3c4bb60cddd4.jpg?v=1649746076",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343_165x.jpg?v=1649746077 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343_360x.jpg?v=1649746077 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343_533x.jpg?v=1649746077 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343_720x.jpg?v=1649746077 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343_940x.jpg?v=1649746077 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343.jpg?v=1649746077 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_c0cbd186-3283-40c8-af49-5c99b42da343.jpg?v=1649746077",
      outstock: false,
      name: "Printed mediocritatem",
      regularPrice: "$14.00",
      salePrice: "$14.00"
    },
    {
      id: 6,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_165x.jpg?v=1649746048 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_360x.jpg?v=1649746048 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_533x.jpg?v=1649746048 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_720x.jpg?v=1649746048 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e_940x.jpg?v=1649746048 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/4_75786b6a-98f4-47ca-80f9-4f93c0e64a3e.jpg?v=1649746048 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/14_f43f04e2-84f2-4af7-9cfa-449fb0baee2d.jpg?v=1649746059',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_165x.jpg?v=1649746047 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_360x.jpg?v=1649746047 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_533x.jpg?v=1649746047 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_720x.jpg?v=1649746047 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575_940x.jpg?v=1649746047 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/5_8386d117-b991-4190-b68e-6d3e08e93575.jpg?v=1649746047 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_3dd9841e-93c7-4034-ace2-66abc9241add.jpg?v=1649746060',
      outstock: false,
      name: 'Printed Dress',
      RegularPrice: '$7.00',
      salePrice: '$7.00',
    },
    {
      id: 7,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13_165x.jpg?v=1649746083 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13_360x.jpg?v=1649746083 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13_533x.jpg?v=1649746083 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13_720x.jpg?v=1649746083 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13_940x.jpg?v=1649746083 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13.jpg?v=1649746083 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_52ec4f66-c322-4999-b0e0-d6a0b2421d13.jpg?v=1649746083',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f_165x.jpg?v=1649746083 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f_360x.jpg?v=1649746083 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f_533x.jpg?v=1649746083 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f_720x.jpg?v=1649746083 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f_940x.jpg?v=1649746083 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f.jpg?v=1649746083 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_7ac83723-1ddc-4278-8b36-78fcf15add3f.jpg?v=1649746083',
      outstock: false,
      name: 'Printed Summer',
      RegularPrice: '$17.00',
      salePrice: '$17.00'
    },
    {
      id: 8,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e_165x.jpg?v=1649746087 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e_360x.jpg?v=1649746087 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e_533x.jpg?v=1649746087 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e_720x.jpg?v=1649746087 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e_940x.jpg?v=1649746087 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e.jpg?v=1649746087 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/15_42d3b88b-02f5-42a9-944b-bbb41c69ee4e.jpg?v=1649746087',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7_165x.jpg?v=1649746086 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7_360x.jpg?v=1649746086 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7_533x.jpg?v=1649746086 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7_720x.jpg?v=1649746086 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7_940x.jpg?v=1649746086 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7.jpg?v=1649746086 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_c7a16c12-4bcc-40d5-a957-777ce3d7edc7.jpg?v=1649746086',
      outstock: false,
      name: 'printed sweater',
      RegularPrice: '$26.00',
      salePrice: '$26.00'
    },
    {
      id: 9,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0_165x.jpg?v=1649746062 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0_360x.jpg?v=1649746062 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0_533x.jpg?v=1649746062 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0_720x.jpg?v=1649746062 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0_940x.jpg?v=1649746062 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0.jpg?v=1649746062 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/19_371bf66d-f6c7-4179-90d8-d95b84375bd0.jpg?v=1649746062",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25_165x.jpg?v=1649746062 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25_360x.jpg?v=1649746062 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25_533x.jpg?v=1649746062 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25_720x.jpg?v=1649746062 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25_940x.jpg?v=1649746062 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25.jpg?v=1649746062 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_4e67c328-1284-4ff2-a618-6a9adfec4a25.jpg?v=1649746062",
      outstock: false,
      name: "Printed material",
      RegularPrice: "$21.00",
      salePrice: "$21.00"
    }
  ]

  TrendingProducts2: any = [
    {
      id: 1,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d_165x.jpg?v=1649745998 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d_360x.jpg?v=1649745998 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d_533x.jpg?v=1649745998 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d_720x.jpg?v=1649745998 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d_940x.jpg?v=1649745998 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d.jpg?v=1649745998 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_78209d9c-3bec-47fe-a8a3-87db2b7fb83d.jpg?v=1649745998",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec_165x.jpg?v=1649745999 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec_360x.jpg?v=1649745999 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec_533x.jpg?v=1649745999 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec_720x.jpg?v=1649745999 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec_940x.jpg?v=1649745999 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec.jpg?v=1649745999 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/18_6b50a227-94a4-4b3f-b8c2-ebcf5ca0b8ec.jpg?v=1649745999",
      outstock: false,
      name: "Eled doming",
      RegularPrice: "$54.00",
      salePrice: "$48.00",
      description: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer! Sample Unordered List Comodous in tempor...",
    },
    {
      id: 2,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e_165x.jpg?v=1649745990 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e_360x.jpg?v=1649745990 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e_533x.jpg?v=1649745990 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e_720x.jpg?v=1649745990 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e_940x.jpg?v=1649745990 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e.jpg?v=1649745990 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_4da886b9-7a32-4843-9991-4a99a1709f4e.jpg?v=1649745990",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc_165x.jpg?v=1649745989 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc_360x.jpg?v=1649745989 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc_533x.jpg?v=1649745989 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc_720x.jpg?v=1649745989 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc_940x.jpg?v=1649745989 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc.jpg?v=1649745989 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/8_e64cc317-294f-43b7-861f-69b3a79b9bfc.jpg?v=1649745989",
      outstock: "Sold out",
      name: "Brown bear",
      RegularPrice: "$56.00",
      salePrice: "$56.00"
    },
    {
      id: 3,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f_165x.jpg?v=1649746476 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f_360x.jpg?v=1649746476 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f_533x.jpg?v=1649746476 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f_720x.jpg?v=1649746476 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f_940x.jpg?v=1649746476 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f.jpg?v=1649746476 1000w',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/10_b69ea7ba-8f06-4c32-8152-669f895e2b7f.jpg?v=1649746476',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41_165x.jpg?v=1649746476 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41_360x.jpg?v=1649746476 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41_533x.jpg?v=1649746476 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41_720x.jpg?v=1649746476 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41_940x.jpg?v=1649746476 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41.jpg?v=1649746476 1000w',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_b423b4a7-5c98-40d3-9c64-2d69806aac41.jpg?v=1649746476',
      outstock: false,
      name: 'Rubber Plants',
      regularPrice: '$54.00',
      salePrice: '$54.00'
    },
    {
      id: 4,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515_165x.jpg?v=1649746090 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515_360x.jpg?v=1649746090 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515_533x.jpg?v=1649746090 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515_720x.jpg?v=1649746090 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515_940x.jpg?v=1649746090 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515.jpg?v=1649746090 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/20_b2a50584-3bf8-4deb-a207-8d6ca7a56515.jpg?v=1649746090",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0_165x.jpg?v=1649746099 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0_360x.jpg?v=1649746099 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0_533x.jpg?v=1649746099 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0_720x.jpg?v=1649746099 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0_940x.jpg?v=1649746099 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0.jpg?v=1649746099 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_2882d285-8a1e-47fc-aaa7-8e34e4547ab0.jpg?v=1649746099",
      outstock: false,
      name: 'sleeves t-shirt',
      RegularPrice: '$68.00',
      salePrice: '$61.00'
    },
    {
      id: 5,
      srcset: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/2_36f54b93-81ec-4d92-ad45-fa98b10ca185_165x.jpg?v=1649745985',
      data_src: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/2_36f54b93-81ec-4d92-ad45-fa98b10ca185.jpg?v=1649745985',
      srcset2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_59b16881-88f8-4ed8-a0b6-eddc1bf64bcf_165x.jpg?v=1649745984',
      data_src2: '//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_59b16881-88f8-4ed8-a0b6-eddc1bf64bcf.jpg?v=1649745984',
      outstock: false,
      name: 'Black Umbrella',
      RegularPrice: '$126.00',
      salePrice: '$126.00',
    },
    {
      id: 6,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91_165x.jpg?v=1649745980 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91_360x.jpg?v=1649745980 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91_533x.jpg?v=1649745980 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91_720x.jpg?v=1649745980 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91_940x.jpg?v=1649745980 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91.jpg?v=1649745980 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/16_1504a017-2230-48a6-976e-f9ffb8c52c91.jpg?v=1649745980",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846_165x.jpg?v=1649745980 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846_360x.jpg?v=1649745980 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846_533x.jpg?v=1649745980 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846_720x.jpg?v=1649745980 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846_940x.jpg?v=1649745980 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846.jpg?v=1649745980 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/17_fbd80d80-d71b-4930-8d4f-1acd127ef846.jpg?v=1649745980",
      outstock: false,
      name: 'Before decaf',
      RegularPrice: '$34.00',
      salePrice: '$34.00'
    },
    {
      id: 7,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4_165x.jpg?v=1649745974 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4_360x.jpg?v=1649745974 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4_533x.jpg?v=1649745974 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4_720x.jpg?v=1649745974 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4_940x.jpg?v=1649745974 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4.jpg?v=1649745974 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/11_74dfc79d-8722-4f67-b893-0ae93cb9cec4.jpg?v=1649745974",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb_165x.jpg?v=1649745975 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb_360x.jpg?v=1649745975 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb_533x.jpg?v=1649745975 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb_720x.jpg?v=1649745975 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb_940x.jpg?v=1649745975 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb.jpg?v=1649745975 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/12_402f8b27-e5ff-4937-b3bb-f8d7e52970eb.jpg?v=1649745975",
      outstock: false,
      name: 'Basic Korean',
      RegularPrice: '$41.00',
      salePrice: '$41.00'
    },
    {
      id: 8,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e_165x.jpg?v=1649745968 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e_360x.jpg?v=1649745968 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e_533x.jpg?v=1649745968 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e_720x.jpg?v=1649745968 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e_940x.jpg?v=1649745968 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e.jpg?v=1649745968 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/6_d5fedb06-6e06-42bf-ae6f-08d5d2ef069e.jpg?v=1649745968",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057_165x.jpg?v=1649745968 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057_360x.jpg?v=1649745968 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057_533x.jpg?v=1649745968 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057_720x.jpg?v=1649745968 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057_940x.jpg?v=1649745968 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057.jpg?v=1649745968 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/7_02b3832c-e826-4969-be0e-02d881e5c057.jpg?v=1649745968",
      outstock: false,
      name: "Basic contrast",
      RegularPrice: "$30.00",
      salePrice: "$30.00"
    },
    {
      id: 9,
      srcset: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd_165x.jpg?v=1649745958 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd_360x.jpg?v=1649745958 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd_533x.jpg?v=1649745958 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd_720x.jpg?v=1649745958 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd_940x.jpg?v=1649745958 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd.jpg?v=1649745958 1000w",
      data_src: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/1_63fa30e2-1cf3-4b76-8f85-5247e5acacdd.jpg?v=1649745958",
      srcset2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3_165x.jpg?v=1698057910 165w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3_360x.jpg?v=1698057910 360w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3_533x.jpg?v=1698057910 533w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3_720x.jpg?v=1698057910 720w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3_940x.jpg?v=1698057910 940w,//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3.jpg?v=1698057910 1000w",
      data_src2: "//fashionist-ishi-2.myshopify.com/cdn/shop/products/3_40d40a98-b64a-4046-b417-6dfeeecdd5a3.jpg?v=1698057910",
      outstock: false,
      name: 'Backpack',
      RegularPrice: '$68.00',
      salePrice: '$68.00'
    }
  ]


  constructor(public app: AppComponent) {
    this.tab = 1
    this.checkId = 0
  }

  ngOnInit() {
    this.app.Headerdropdown = false
    this.app.footer = false
    this.tab = 1
  }

  SelectTab(id: any) {
    this.tab = id
  }

  checkbox(data: any, item: any) {
    console.log(data.target.checked);
    if (data.target.checked == true) {
      this.deleteList.push(item)
    } else if (data.target.checked == false) {
      this.deleteList = this.deleteList.filter((res: any) => {
        return res.id != item.id
      })
    }
  }

  ConfirmDelete() {
    console.log(this.deleteList);
  }

  EditById(data: any) {
    console.log(data);
  }

  ViewProdDetail(data: any) {
    console.log(data);
  }


  EditTrendTabs(item: any) {
    console.log(item);
  }

}
