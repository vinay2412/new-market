import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardCardComponent } from '../board-card/board-card.component';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.scss']
})
export class BoardDetailsComponent implements OnInit {
  todo = [
    'Get to work',
    'testing',
    'card',
    'test1234',
    'checking',
    'Board check',
    'Test',
  ];

  done = [
    'Get up',
  ];
  done1 = [
    'Get up',
  ];
  todo1 = [
    'Get up',
  ];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(BoardCardComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
