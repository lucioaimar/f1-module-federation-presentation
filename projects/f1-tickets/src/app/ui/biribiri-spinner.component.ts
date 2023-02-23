import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-biribiri-spinner',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="spinner-container">
      <p *ngIf="show | async; else empty">Biri</p>
      <p *ngIf="!(show | async); else empty">Biri</p>
    </div>
    <ng-template #empty>
      <div class="empty-div"></div>
    </ng-template>`,
  styles: [
    `
      .spinner-container {
        display: flex;
        p {
          margin-left: 0.15rem;
          text-decoration: underline;
          font-size: 1.3rem;
        }
        .empty-div {
          width: 2rem;
        }
      }
    `,
  ],
})
export class BiribiriSpinnerComponent {
  show = interval(300).pipe(map((x) => x % 2 === 0));
}
