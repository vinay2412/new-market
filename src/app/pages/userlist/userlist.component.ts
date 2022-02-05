import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/guards/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  public loading: boolean;
  public backgroundOpacity: number
  public panelOpenState = false;
  settings = {
    add: {
      addButtonContent: '<i class="fa fa-plus-square" aria-hidden="true"></i>',
      createButtonContent: '<i class="fa fa-check mr-3" aria-hidden="true"></i>',
      cancelButtonContent: '<i class="fa fa-times-circle" aria-hidden="true"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil mr-3" aria-hidden="true"></i>',
      saveButtonContent: '<i class="fa fa-check mr-3" aria-hidden="true"></i>',
      cancelButtonContent: '<i class="fa fa-times-circle" aria-hidden="true"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash" aria-hidden="true"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      website: {
        title: 'Website',
        filter: false
      }
    }
  };
  public data: any;
  public adminList: any;

  columnDefs = [
    {
      headerName: 'Action',
      field: ''
    },
    {
      headerName: 'Id',
      filter: true,
      field: ''
    },
    {
      headerName: 'Name',
      filter: true,
      field: ''
    },
    {
      headerName: 'Email',
      filter: true,
      field: ''
    },
    {
      headerName: 'Contact',
      filter: true,
      field: ''
    },
    {
      headerName: 'Avatar',
      filter: true,
      field: ''
    },

  ];

  public rowData: any;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.adminData();
  }

  fetchData() {
    this.userService.userList().subscribe(res => {
      this.data = res
      console.log(res)
    })
  }

  adminData() {
    this.userService.adminList().subscribe(res => {
      console.log(res)
      // this.rowData = res;
    })
  }

}
