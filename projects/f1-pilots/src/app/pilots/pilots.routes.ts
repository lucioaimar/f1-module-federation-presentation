import { Route } from '@angular/router';
import { PilotPageComponent } from './ui/pilot-page.component';
import { PilotProfileComponent } from './ui/pilot-profile.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: PilotPageComponent,
  },
  { path: 'profile/:id', component: PilotProfileComponent },
];
