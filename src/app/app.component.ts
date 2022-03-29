import {Component} from '@angular/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fe';

  constructor(public authService: AuthService) {
  }

  isAdmin() {
    return this.authService.getRole() == "ROLE_ADMIN";
  }

  isEmployee() {
    return this.authService.getRole() == "ROLE_EMPLOYEE";
  }

  isMember() {
    return !this.isAdmin() && !this.isEmployee();
  }

  //sidebar
  public isLoggedIn() {
    return this.authService.isLoggedIn();
  }
//sidebar
  public logout() {
    this.authService.clear();
  }
}
