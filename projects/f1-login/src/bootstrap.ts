import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations(), provideRouter(ROUTES)],
}).catch((err) => console.error(err));
