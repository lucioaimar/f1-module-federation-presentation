import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotsService } from '../pilots.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pilot } from '../pilots.model';

@Component({
  selector: 'app-pilot-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-container">
      <div class="profile" *ngIf="pilot$ | async as pilot">
        <img [src]="pilot.image" alt="Pilot Image" />
        <section class="data">
          <ul>
            <li>Name: {{ pilot.givenName + ' ' + pilot.familyName }}</li>
            <li>Team: {{ pilot.team }}</li>
            <li>Country: {{ pilot.country }}</li>
            <li>Number: {{ pilot.number }}</li>
            <li>Podiums: NO SE UN MONTÓN</li>
            <li>Titles: If Lewis 7, if Max 2, else I don't know</li>
          </ul>
          <section class="logo-and-number">
            <img width="50px" [src]="pilot.teamLogo" alt="" />
            <img width="50px" [src]="pilot.numberImg" alt="" />
          </section>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .profile-container {
        display: flex;
        justify-content: center;
      }
      .profile {
        width: 968px;
        display: flex;
        img {
          width: 50%;
        }
        .data {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          ul {
            font-size: 1.5rem;
          }
          .logo-and-number {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
          }
        }
      }
    `,
  ],
})
export class PilotProfileComponent {
  pilotService = inject(PilotsService);

  route = inject(ActivatedRoute);

  pilot$: Observable<Pilot | undefined> = this.pilotService.getPilot(
    this.route.snapshot.paramMap.get('id') || ''
  );
}
