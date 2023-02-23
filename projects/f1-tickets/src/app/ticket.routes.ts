import { Route } from '@angular/router';
import { TicketsFormComponent } from './ui/tickets-form.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: TicketsFormComponent,
  },
] as Route[];
