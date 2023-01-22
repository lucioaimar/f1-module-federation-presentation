import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Pilot } from '../pilots.model';

@Component({
  selector: 'app-pilot-preview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  template: `
    <mat-card [routerLink]="'profile/' + pilot.driverId">
      <mat-card-header>
        <mat-card-title>
          <div class="title-row">
            <h3>
              {{ pilot.givenName + ' ' + pilot.familyName }}
            </h3>
            <img
              class="country-flag"
              width="50px"
              height="35px"
              [src]="pilot.flag"
              alt=""
            />
          </div>
        </mat-card-title>
        <mat-card-subtitle>
          {{ pilot.team }}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <section class="logo-and-number">
          <img width="70px" [src]="pilot.teamLogo" alt="" />
          <img width="70px" [src]="pilot.numberImg" alt="" />
        </section>
        <img [src]="pilot.image" alt="" />
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      h4 {
        margin: 0;
      }
      h3 {
        margin: 0;
      }
      mat-card {
        width: 100%;
        &:hover {
          cursor: pointer;
          background-color: #fefe;
          transition: 0.3s ease-in-out all;
          transform: scale(1.05);
        }
        mat-card-subtitle {
          margin: 0.5rem 0;
        }
        .title-row {
          display: flex;
          justify-content: space-between;
          .country-flag {
            margin-left: 7rem;
            border-radius: 5px;
          }
        }
        mat-card-content {
          display: flex;
          justify-content: space-between;
          .logo-and-number {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    `,
  ],
})
export class PilotPreviewComponent {
  @Input() pilot: Pilot = {} as Pilot;
}
