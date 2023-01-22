import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotsService } from '../pilots.service';
import { Pilot } from '../pilots.model';
import { PilotPreviewComponent } from './pilot-preview.component';

@Component({
  selector: 'app-pilot-page',
  standalone: true,
  imports: [CommonModule, PilotPreviewComponent],
  template: `
    <div class="pilots-grid">
      <app-pilot-preview [pilot]="pilot" *ngFor="let pilot of pilots$ | async"/>
    </div>
  `,
  styles: [
    `
      .pilots-grid{
        padding: 2rem 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }
    `,
  ],
})
export class PilotPageComponent {
  pilotsService = inject(PilotsService);

  pilots$ = this.pilotsService.getPilots();

  selectedPilot$ = this.pilotsService.selectedPilot;

  selectPilot(pilot: Pilot) {
    this.pilotsService.selectPilot(pilot);
  }
}
