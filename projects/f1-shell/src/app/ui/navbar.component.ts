import { RemoteComponent } from './../microfrontend-utils/remote.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MicrofrontendService } from '../microfrontend-utils/microfrontend.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, MatButtonModule, RemoteComponent],
  template: `<mat-toolbar>
    <mat-toolbar-row>
      <img
        width="100"
        src="https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png"
        alt="F1"
      />
      <ul class="link-list">
        <li *ngFor="let route of microfrontendList$ | async">
          <a [routerLink]="route.routePath" routerLinkActive="active">{{
            route.displayName
          }}</a>
        </li>
      </ul>
      <app-remote-component />
    </mat-toolbar-row>
  </mat-toolbar>`,
  styles: [
    `
      mat-toolbar {
        height: 4rem;
      }
      .link-list {
        display: flex;
        width: 100%;
        justify-content: center;
        list-style: none;
        gap: 1rem;
        li {
          a {
            text-decoration: none;
            color: red;
            &:hover {
              text-decoration: underline;
              color: black;
            }
            .active {
              text-decoration: underline;
              color: black;
            }
          }
        }
      }
    `,
  ],
})
export class NavbarComponent {
  microfrontendService = inject(MicrofrontendService);

  microfrontendList$ = this.microfrontendService.routes$;
}
