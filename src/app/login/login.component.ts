import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['santosh'],
      password: ['santosh'],
    });
  }

  login(): void {
    const data = this.loginForm.value;

    this.authService.logSession(JSON.stringify(data));
  }

  checkIfLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
