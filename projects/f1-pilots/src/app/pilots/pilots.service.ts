import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pilot } from './pilots.model';

@Injectable({
  providedIn: 'root',
})
export class PilotsService {
  firestore = inject(Firestore);
  pilotsRef = collection(this.firestore, 'pilots');

  readonly pilotSelected$ = new BehaviorSubject<Pilot>({} as Pilot);

  selectPilot(pilot: Pilot) {
    this.pilotSelected$.next(pilot);
  }

  get selectedPilot() {
    return this.pilotSelected$.asObservable();
  }

  getPilots(): Observable<Pilot[]> {
    return collectionData(this.pilotsRef, {
      idField: 'driverId',
    }) as Observable<Pilot[]>;
  }

  getPilot(id: string): Observable<Pilot | undefined> {
    return this.getPilots().pipe(
      map((pilots) => pilots.find((pilot) => pilot.driverId === id))
    );
  }
}
