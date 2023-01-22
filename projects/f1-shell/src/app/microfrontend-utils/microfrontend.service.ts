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
        exportName: 'BookingsModule',
        type: 'module',
      },
      {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
        displayName: 'Races',
        routePath: 'races',
        exportName: 'BookingsModule',
        type: 'module',
      },
    ]);
  }
}
