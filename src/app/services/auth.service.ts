import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLoggedIn$ = this.loggedIn.asObservable();

  get user(): any {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  setLoggedIn(status: boolean): void {
    this.loggedIn.next(status);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // 🧼 clear user data
    this.setLoggedIn(false);
  }
}

