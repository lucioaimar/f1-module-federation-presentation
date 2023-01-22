import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom, Injector } from '@angular/core';
import { MicrofrontendService } from './app/microfrontend-utils/microfrontend.service';
import { provideRouter, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CustomRemoteConfig } from './app/microfrontend-utils/remote-config.model';
import { buildRemoteRoutes } from './app/microfrontend-utils/loadRemoteRoutes';
import { DEFAULT_ROUTES } from './app/default.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getAuth } from '@firebase/auth';
import { environment } from 'environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter([]),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
    {
      provide: APP_INITIALIZER,
      useFactory: setRemotes,
      deps: [Injector],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));

function setRemotes(injector: Injector) {
  return async () => {
    const moduleLicensingService: MicrofrontendService =
      injector.get(MicrofrontendService);
    const router: Router = injector.get(Router);
    const remotes: CustomRemoteConfig[] = await lastValueFrom(
      moduleLicensingService.getMicrofrontendList()
    );
    const remoteRoutes = remotes.length > 0 ? await buildRemoteRoutes(remotes) : [];
    moduleLicensingService.routes.next(remotes);
    router.resetConfig([...DEFAULT_ROUTES, ...remoteRoutes]);
  };
}
