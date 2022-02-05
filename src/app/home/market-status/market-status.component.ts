import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-market-status',
  templateUrl: './market-status.component.html',
  styleUrls: ['./market-status.component.scss']
})
export class MarketStatusComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 300,
    navText: [''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1199: {
        items: 1
      }
    },
    nav: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
