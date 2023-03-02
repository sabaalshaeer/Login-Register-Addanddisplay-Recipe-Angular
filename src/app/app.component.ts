import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { LoginService } from './services/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pantry-collab';
  public Route: Route[] = [];

  constructor(public loginService: LoginService) {}
}
