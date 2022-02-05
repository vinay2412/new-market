import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      575: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
