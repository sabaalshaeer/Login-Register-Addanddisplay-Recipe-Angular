import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public username = ''
  public password = ''

  constructor(public loginService: LoginService) {}





}
