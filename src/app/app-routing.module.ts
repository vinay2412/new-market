import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guards/authguard.guard';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'list', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'board', loadChildren: () => import('./board/board.module').then(m => m.BoardModule)},
  {
    path: '',
    component: HeaderComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
