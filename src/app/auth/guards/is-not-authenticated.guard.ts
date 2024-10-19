import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

// Public Guard - Private Guard
export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authSrv = inject(AuthService);
  const router = inject(Router);

  console.log({authStatus: authSrv.authStatus()});

  if(authSrv.authStatus() === AuthStatus.authenticated) {
    router.navigate(['dashboard']);
    return false;
  }

  // const url = state.url;
  // localStorage.setItem('url', url);

  return true;
};
