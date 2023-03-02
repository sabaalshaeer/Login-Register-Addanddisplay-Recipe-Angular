import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // reactiveForm: FormGroup | undefined;



  public fullName = '';
  public username = '';
  public email = '';
  public password = '';

  // public fullName: string | undefined;
  // public username: string | undefined;
  // public email: string | undefined;
  // public password: string | undefined;

  // public registerForm: FormGroup = new FormGroup({
  //     fullName: new FormControl('', Validators.required),
  //      username: new FormControl('', Validators.required),
  //      email: new FormControl('', Validators.required),
  //      password: new FormControl('', Validators.required),
  // });

  constructor(public loginService: LoginService) {}

  public onSubmit() {
    // console.warn(this.registerForm.value);
    // this.loginService.registerAccount(this.registerForm.value);
  }
}
