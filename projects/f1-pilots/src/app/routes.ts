import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'pilots',
    loadChildren: () => import('./pilots/pilots.routes'),
  },
];
