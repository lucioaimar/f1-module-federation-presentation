import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';
import { Component, importProvidersFrom, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { getAuth, provideAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterLink],
  template: `
    <button
      mat-flat-button
      color="primary"
      routerLink="login"
      *ngIf="!(loginService.isLoggedIn$ | async); else userHeader"
    >
      Log in
    </button>
    <ng-template #userHeader>
      <ng-container *ngIf="loginService.user$ | async as user">
        <div class="user-header">
          <span>{{ user.displayName }}</span>
          <img
            width="30px"
            height="30px"
            [matMenuTriggerFor]="menu"
            [src]="user.photoURL"
          />
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="loginService.logout()">
              <span>Logout</span>
            </button>
          </mat-menu>
        </div>
      </ng-container>
    </ng-template>
  `,
  styles: [
    `
      .user-header {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          border-radius: 50%;
          cursor: pointer;
        }
      }
    `,
  ],
})
export class UserHeaderComponent {
  loginService = inject(LoginService);
}
