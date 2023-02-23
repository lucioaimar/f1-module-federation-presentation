import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/ticket.routes';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(ROUTES)],
}).catch((err) => console.error(err));
