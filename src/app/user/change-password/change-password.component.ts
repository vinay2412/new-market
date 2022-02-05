import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public passwordChange: FormGroup;

  constructor(
    public builder: FormBuilder,
    public snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.build();
  }

  build(){
    this.passwordChange = this.builder.group({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  rest(){
    this.passwordChange.reset();
  }

  onSubmit(){
    let param = this.passwordChange.getRawValue()
    this.snack.open('New Password Changed Sucessfully', 'Thanks',{
      duration: 3000,
    })
    console.log('data', param)
  }

}
