import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authSrv = inject(AuthService);

  public myForm = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  });

  login() {
    const { email, password } = this.myForm.value;
    if (!email || !password) return;
    this.authSrv.login(email, password)
      .subscribe((result) => {
        console.log('result', result);
      });
  }

}
