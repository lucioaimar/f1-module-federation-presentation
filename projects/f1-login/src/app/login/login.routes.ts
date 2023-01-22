import { LoginService } from './login.service';
import { importProvidersFrom, inject } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { environment } from 'environment';
import { LoginPageComponent } from './login-page.component';

export default [
  {
    path: '',
    component: LoginPageComponent,
    /* canActivate: [
      () => {
        let rounter = inject(Router);
        const user = sessionStorage.getItem('user');
        if (!user) {
          console.log('true');
          return rounter.navigate(['login']);
        } else {
          console.log('false');
          return rounter.navigate(['']);
        }
      },
    ], */
  },
] as Route[];
