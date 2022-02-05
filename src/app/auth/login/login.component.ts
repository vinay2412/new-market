import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public form: FormGroup;
  public userName: string;
  public password: string;
  public isPasswordVisible:boolean = false;

  constructor(public router: Router,
    public formBuilder: FormBuilder,
    public snack: MatSnackBar,
    private auth: AuthService,
    ) {
      if (this.auth.loggedIn) {
        this.router.navigate(['/home']);
      }
     }

  ngOnInit(): void {
    this.build();
  }

  build(){
    this.form = this.formBuilder.group({
      userName: new FormControl (''),
      password: new FormControl (''),
      remember: new FormControl ('')
    })
  }

  // login(): void {
  //   if (this.username != '' && this.password != '') {
  //     if (this.auth.login(this.username, this.password)) {
  //       this.router.navigate(['/home']);
  //     }
  //     else
  //       this.snack.open('Wrong email and password', 'Try Again...')
  //   }
  // }

  public togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submitLogin(){
    this.loading = true;
    const param = this.form.getRawValue();

    if (this.userName != '' && this.password != '') {
      if (this.auth.login(this.userName, this.password)) {
        this.loading = true;
        this.snack.open('Login Successfully', 'Thanks', {
          duration: 3000,
        })
        console.log('login', param);
        setTimeout(() => {
          this.loading = false;
        this.router.navigate(['/home']);
        }, 2000);
      }
      else{
      this.loading = false;
        this.snack.open('No Record Found...', 'Try Again...',{
          duration: 3000,
        })
    }
  }
  }

}
