import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable, pipe, take } from 'rxjs';
import { Pantry } from '../Models/Pantry';
import { Route } from '../Models/Route';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public Route: typeof Route = Route;
  public currentRoute: Route = Route.Home;

  private isLoading: boolean = false;

  //private loading = false
  private userId: number | undefined;
  private username: string = '';

  public users: User[] = [];

  public pantries: Pantry[];

  BASE_URL = 'https://localhost:7004/';

  // loggedInMember: FamilyMember;

  // private before the snackBar , turn it to field so I can access to it
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username !== null && password !== null)
      this.tryLogin(username, password);
  }

  public getLoading(): boolean {
    return this.isLoading;
  }

  public setLoading(state: boolean): void {
    this.isLoading = state;
  }

  public navigate(route: Route): void {
    this.currentRoute = route;
  }

  public getUsername(): string | undefined {
    // console.log('getUsername:', this.username);
    return this.username;
  }

  public loginSuccess(user: User): void {
    console.log('loginSuccess:', user);

    this.userId = user.id;
    this.username = user.username;
    this.navigate(Route.User_Home);
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
    console.log(user);
    console.log(user.username);
  }

  public getUserId(): number {
    return this.userId;
  }

  public showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000,
    });
  }

  public tryLogin(username: string, password: string): void {
    console.log('tryLogin:', username, password,this.userId);
    if (username == '' || username == null) {
      this.showError('Invalid Username');
      return;
    }
    if (password == '' || password == null) {
      this.showError('Invalid Password');
      return;
    }
    this.http
      .get<User[]>(`http://localhost:3000/users?username=${username}&password=${password}`
      )
      .pipe(take(1))
      .subscribe({
        next:(users) => {
          console.log(users)
          // condition
          // if (users.length !== 1){
          //   this.showError('Invalid Username and/or Password')
          //   return
          // }
          // call loginSuccess function
          const user = users[0];
          this.loginSuccess(user)
        },
        error: (error) => {
          console.log('Error:', error);
          this.showError('Error occurred while logging in');
        },
      });
  }

  public logout(): void {
    this.navigate(Route.Home);
    this.userId = undefined;
    this.username = undefined;
    localStorage.clear();
  }

  public registerNewUser(
    fullName: string,
    password: string,
    username: string,
    email: string
  ): void {
     // Check if username already exists
    this.http
    .get(`http://localhost:3000/users?username=${username}`)
    .pipe(take(1))
    .subscribe({
      next: (response: any) => {
        if (response.length > 0) {
          this.showError(`Error: Username '${username}' already exists.`);
          // console.log(`Error: Username '${username}' already exists.`);
          return;
        }
        // Register new user
    this.http
      .post(`http://localhost:3000/users`
        //`https://localhost:3000/api/Auth/signup/`, {//id: null, fullName, userName,password,email}
        , {
        fullName,
        username,
        password,
        email,
      })
      .pipe(take(1))
      .subscribe({
        next: () => {

           // Add a delay of 1 second before calling tryLogin
          // setTimeout(() => {
          //   this.tryLogin(username, password);
          // }, 1000);

          this.tryLogin(username, password);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  });

  }

  // public logout(): void {
  //   if (!this.userId || !this.username) {
  //     return; // already logged out
  //   }
  //   this.navigate(Route.Home);
  //   this.userId = undefined;
  //   this.username = undefined;
  //   localStorage.clear();
  // }


  // public logout(): void {
  //   this.http.post('http://localhost:3000/logout', {}).subscribe(() => {
  //     this.navigate(Route.Home);
  //     this.userId = undefined;
  //     this.username = undefined;
  //     localStorage.clear();
  //   });
  // }
}
