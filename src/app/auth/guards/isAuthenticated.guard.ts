import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authSrv = inject(AuthService);
  const router = inject(Router);

  console.log({authStatus: authSrv.authStatus()});

  if(authSrv.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if(authSrv.authStatus() === AuthStatus.checking) {
    return false;
  }

  // const url = state.url;
  // localStorage.setItem('url', url);

  router.navigate(['auth/login']);
  return false;
};
