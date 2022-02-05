import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoradApplyComponent } from '../borad-apply/borad-apply.component';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  createBoard(){
    const dialogRef = this.dialog.open(BoradApplyComponent, {
      width: '250px',
      hasBackdrop: false,
      panelClass: 'custom-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
