import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'users',
    component: UserlistComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
