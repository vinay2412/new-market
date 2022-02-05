import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/guards/user.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean;
  public name: string;
  public userName: string;
  public email: string;
  public password: string;
  public isPasswordVisible: boolean;
  public confirmPassword: string;
  constructor(private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private user: UserService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
   this.build();
  }

  build(){
    this.form = this.formBuilder.group({
      name: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(16),]),
      userName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(12),]),
      email: new FormControl ('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      confirmPassword: new FormControl ('', [Validators.required]),
    },
    {Validators: this.matchPassword('password', 'confirmPass')})
  }

  matchPassword(passwordKey: string, passwordConfirmationKey: string){
    // let password = form.controls['password'].value;
    // let confirmPassword = form.controls['confirmPassword'].value;
    // return (password === confirmPassword) ? null : { matchPassword: 'password not match' }
    return (form: FormGroup) => {
    let passwordInput = form.controls[passwordKey],
                passwordConfirmationInput = form.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
          }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(){
    this.loading = true;
    let param = this.form.getRawValue()
    // console.log('submit', param)
    // this.snackBar.open(`Welcome ${this.name}`, 'Register Successfully', {
    //   duration: 2000
    // });
    // setTimeout(() => {
    // this.router.navigate(['/auth/login'])
    // }, 2000);
    if (this.form.invalid) {
      return;
  }
  this.auth.register(this.form)
  .subscribe(
      data => {
        console.log(data);
        this.snackBar.open(`Welcome ${this.email}`, 'Successfully', {
            duration: 2000
          });
          // setTimeout(() => {
          //   this.loading = false;
          //   this.router.navigate(['/auth/login']);
          // }, 2000);
      },
      error => {
        this.loading = false;
        this.snackBar.open('Not Created Server Error 404', 'Try Again', {
          duration: 2000
        });
      });
  }
}
