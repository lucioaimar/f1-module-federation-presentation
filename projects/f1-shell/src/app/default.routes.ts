import { AppComponent } from './app.component';
import { Route } from '@angular/router';

export const DEFAULT_ROUTES: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/LoginRoutes'),
  },
];
