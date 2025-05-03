import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user = { email: '', password: '' };
  loginSuccess = false;
  loginError = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  login(): void {
    this.http.post('http://127.0.0.1:5001/login', this.user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user)); // 🟢 store user info
        this.authService.setLoggedIn(true);
        this.router.navigate(['/']);
      },
      error: () => {
        this.loginError = true;
      }
    });
  }
  
}
