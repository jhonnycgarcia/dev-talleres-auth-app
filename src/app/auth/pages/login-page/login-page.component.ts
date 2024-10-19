import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';


@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authSrv = inject(AuthService);
  private router = inject(Router);

  public myForm = this.fb.group({
    email: [ 'plars@yopmail.com', [ Validators.required, Validators.email ] ],
    password: [ '1234567', [ Validators.required, Validators.minLength(6) ] ]
  });

  login() {
    const { email, password } = this.myForm.value;
    if (!email || !password) return;
    this.authSrv.login(email, password)
      .subscribe({
        // next: () => this.router.navigate(['dashboard']),
        next: () => console.log('Todo bien'),
        error: (message) => {
          console.log('err', message);
          Swal.fire('Error', message, 'error');
        }
      });
  }

}
