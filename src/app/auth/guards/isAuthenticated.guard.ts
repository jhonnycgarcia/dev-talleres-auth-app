import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authSrv = inject(AuthService);
  const router = inject(Router);

  if(authSrv.authStatus() === AuthStatus.authenticated) { return true;}

  // const url = state.url;
  // localStorage.setItem('url', url);

  router.navigate(['auth/login']);
  return false;
};
