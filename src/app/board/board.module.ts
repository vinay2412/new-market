import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { CreateBoardComponent } from './create-board/create-board.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { BoradApplyComponent } from './borad-apply/borad-apply.component';


@NgModule({
  declarations: [
    CreateBoardComponent,
    BoardDetailsComponent,
    BoardListComponent,
    BoardCardComponent,
    BoradApplyComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class BoardModule { }
