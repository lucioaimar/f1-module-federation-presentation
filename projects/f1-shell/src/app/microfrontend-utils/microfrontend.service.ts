import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CustomRemoteConfig } from './remote-config.model';

@Injectable({
  providedIn: 'root',
})
export class MicrofrontendService {
  routes: BehaviorSubject<CustomRemoteConfig[]> = new BehaviorSubject<
    CustomRemoteConfig[]
  >([]);

  get routes$(): Observable<CustomRemoteConfig[]> {
    return this.routes.asObservable();
  }

  getMicrofrontendList(): Observable<CustomRemoteConfig[]> {
    return of([
      {
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Pilot-Routes',
        displayName: 'Pilots',
        routePath: 'pilots',
        exportName: 'ROUTES',
        type: 'module',
      },
      {
        remoteEntry: 'http://localhost:4005/remoteEntry.js',
        exposedModule: './Ticket-Routes',
        displayName: 'Tickets',
        routePath: 'tickets',
        exportName: 'ROUTES',
        type: 'module',
      },
    ]);
  }
}
