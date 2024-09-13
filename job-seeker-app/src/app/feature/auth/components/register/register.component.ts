import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../../../core/services/auth.service';
import { RegisterReq } from '../../models/auth.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);

  registerForm = this.generateRegisterForm();
  isSubmitted = signal<boolean>(false);

  generateRegisterForm() {
    return new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
        confirmPassword: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        yearsOfExperience: new FormControl<number>(null, Validators.required),
        workStatus: new FormControl('', Validators.required),
      },
      this.passwordMissMatch
    );
  }

  passwordMissMatch(form: AbstractControl): null {
    const passwordCtrl = form.get('password');
    const confirmCtrl = form.get('confirmPassword');

    if (passwordCtrl.value !== confirmCtrl.value) {
      confirmCtrl.setErrors({ passwordMissMatch: true });
    } else {
      confirmCtrl.setErrors(null);
    }
    return null;
  }

  onFormSubmit() {
    this.registerForm.markAllAsTouched();
    this.isSubmitted.set(true);

    if (this.registerForm.invalid) return;

    console.log(this.registerForm.value);

    const req: RegisterReq = {
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      country: this.registerForm.controls.country.value,
      city: this.registerForm.controls.city.value,
      yearsOfExperience: this.registerForm.controls.yearsOfExperience.value,
      workStatus: this.registerForm.controls.workStatus.value,
    };

    this.authService.registerUser(req);
  }
}
