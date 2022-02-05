import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { LogosComponent } from './logos/logos.component';
import { MarketStatusComponent } from './market-status/market-status.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SellingProductComponent } from './selling-product/selling-product.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    HomeComponent,
    FilterSearchComponent,
    LogosComponent,
    MarketStatusComponent,
    PopularProductComponent,
    ProductTypeComponent,
    SearchProductComponent,
    SellingProductComponent,
    ContactComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    MatProgressSpinnerModule,
    MatIconModule

  ]
})
export class HomeModule { }
