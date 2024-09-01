import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = this.getContactForm();

  maxContactMessageLenght = 500;

  getContactForm() {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl<number>(null, Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.max(this.maxContactMessageLenght),
      ]),
    });
  }

  onFormSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    console.log(this.contactForm.value);

    this.contactForm.reset();
  }
}
