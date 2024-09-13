import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  loginForm = this.genrateLoginForm();

  genrateLoginForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    this.authService.loginUser({
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    });

    this.loginForm.reset();
  }
}
