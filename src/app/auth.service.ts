import { UserDataService } from './user-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: UserDataService) { }

  isLoggedIn(): boolean {
    if (this.dataService.getItem("user")) {
      return true;
    }
    return false;
  }

  logSession(value: string) {
    this.dataService.setItem('user', value);
  }

  clearSession(){
    this.dataService.removeItem("user");
  }
}
