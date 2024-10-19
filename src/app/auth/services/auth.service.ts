import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  // private _currentUser = signal<any | null>(null);
  // private _authStatus = signal<AuthStatus>();

  login(email: string, password: string): Observable<boolean> {
    // desarrollar
    return of(true);
  }

}
