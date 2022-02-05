import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { BoardListComponent } from './board-list/board-list.component';
import { CreateBoardComponent } from './create-board/create-board.component';

const routes: Routes = [
  {
    path: 'create-board',
    component: CreateBoardComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'board-list',
    component: BoardListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'user-board',
    component: BoardDetailsComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
