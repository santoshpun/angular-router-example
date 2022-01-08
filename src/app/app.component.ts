import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private authService: AuthService){}

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  checkIfLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.clearSession();
  }
}
