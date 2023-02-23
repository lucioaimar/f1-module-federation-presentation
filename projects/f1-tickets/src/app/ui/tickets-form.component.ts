import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BiribiriSpinnerComponent } from './biribiri-spinner.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tickets-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    BiribiriSpinnerComponent,
    MatSnackBarModule,
  ],
  template: `
    <div class="ticket-form-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Buy tickets for your race</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <section class="ticket-form">
            <mat-form-field>
              <mat-label>Name</mat-label>
              <input type="text" matInput placeholder="Name" />
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Choose an race</mat-label>
              <mat-select>
                <mat-option value="option1">Abu Dhabi Grand Prix</mat-option>
                <mat-option value="option1">British Grand Prix</mat-option>
                <mat-option value="option1">Italian Grand Prix</mat-option>
                <mat-option value="option1">Monaco Grand Prix</mat-option>
                <mat-option value="option1">São Paulo Grand Prix</mat-option>
                <mat-option value="option1">Qatar Grand Prix</mat-option>
                <mat-option value="option1">Mexico City Grand Prix</mat-option>
                <mat-option value="option1">Las Vegas Grand Prix</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Select a position</mat-label>
              <mat-select>
                <mat-option value="option1">Position 1</mat-option>
                <mat-option value="option1">Position 2</mat-option>
                <mat-option value="option1">Position 3</mat-option>
                <mat-option value="option1">Position 4</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field>
              <mat-label>Email</mat-label>
              <input type="email" matInput placeholder="Ex. pat@example.com" />
            </mat-form-field>
          </section>
        </mat-card-content>
        <mat-card-actions>
          <button (click)="buyTicket()" mat-raised-button color="primary" style="margin-right: 1rem;">Buy</button>
          <app-biribiri-spinner *ngIf="loading"></app-biribiri-spinner>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .ticket-form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        mat-card-header {
          margin-bottom: 1rem;
        }
        .ticket-form {
          width: 700px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        mat-card-actions{
          height: 20px;
        }
      }
    `,
  ],
})
export class TicketsFormComponent {
  private snackBar = inject(MatSnackBar);

  loading = false;

  buyTicket() {
    this.loading = true;
    timer(5000).subscribe(() => {
      this.loading = false;
      this.snackBar.open('Ticket bought successfully', 'Close', {
        duration: 4000,
      });
    });
  }
}
