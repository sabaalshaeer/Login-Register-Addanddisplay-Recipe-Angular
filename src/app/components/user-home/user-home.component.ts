import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent {
  constructor(public loginService: LoginService) {}


  getUsername(): string {
    return this.loginService.getUsername();
  }
}
