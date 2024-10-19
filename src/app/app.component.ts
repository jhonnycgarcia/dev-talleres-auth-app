import { Component, computed, effect, inject } from '@angular/core';

import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authApp';

  private authSrv = inject(AuthService);
  private router = inject(Router);

  public finishCheckAuthStatus = computed<boolean>(() => {
    if(this.authSrv.authStatus() === AuthStatus.checking) {
      return false
    };
    return true;
  });

  public authStatusChangedEffect = effect(() => {
    console.log('authStatusChangedEffect', this.authSrv.authStatus());
    switch (this.authSrv.authStatus()) {

      case AuthStatus.authenticated:
        this.router.navigate(['dashboard']);
        break;

      case AuthStatus.notAuthenticated:
        this.router.navigate(['auth/login']);
        break;

      case AuthStatus.checking:
        // no hacer nada mientras esperas
        break;

      default:
        break;
    }
  });

}
