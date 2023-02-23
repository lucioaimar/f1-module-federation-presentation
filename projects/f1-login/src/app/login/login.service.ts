import { BehaviorSubject } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { getApp } from '@angular/fire/app';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  auth = inject(Auth);
  router = inject(Router);

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!sessionStorage.getItem('user')
  );

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    sessionStorage.getItem('user')
      ? JSON.parse(sessionStorage.getItem('user') as string)
      : null
  );

  async loginGoogleSSO() {
    let result: any = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider()
    );
    sessionStorage.setItem('user', JSON.stringify(result.user));
    this.isLoggedIn$.next(true);
    this.user$.next(result.user);
    this.router.navigate(['']);
  }

  async logout() {
    await signOut(this.auth);
    this.isLoggedIn$.next(false);
    this.user$.next(null);
    this.router.navigate(['login']);
    sessionStorage.removeItem('user');
  }
}
