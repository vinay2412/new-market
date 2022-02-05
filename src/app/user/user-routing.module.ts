import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthguardGuard],
    component: UserProfileComponent

  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthguardGuard]

  },
  {
    path: 'password',
    component: ChangePasswordComponent,
    canActivate: [AuthguardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
