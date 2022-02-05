import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
// import { AuthguardGuard } from '../guards/authguard.guard';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { MarketStatusComponent } from './market-status/market-status.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { SellingProductComponent } from './selling-product/selling-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthguardGuard]},
  {path: 'selling-product', component: SellingProductComponent, canActivate: [AuthguardGuard]},
  {path: 'popular-product', component: PopularProductComponent, canActivate: [AuthguardGuard]},
  {path: 'market-status', component: MarketStatusComponent, canActivate: [AuthguardGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthguardGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
