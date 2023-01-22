import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="login-container">
      <button
        mat-flat-button
        color="primary"
        (click)="loginService.loginGoogleSSO()"
      >
        Log In with Google
      </button>
    </div>
  `,
  styles: [
    `
      .login-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class LoginPageComponent {
  loginService = inject(LoginService);
}
