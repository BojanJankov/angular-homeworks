import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JobFormModel } from '../../models/job.model';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  jobForm = this.getJobForm();

  submitOutput = output<JobFormModel>();

  getJobForm() {
    return new FormGroup({
      expires: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      startingSalary: new FormControl<number>(null, Validators.required),
      workType: new FormControl(null, Validators.required),
      location: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      qualifications: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      employees: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
    });
  }

  onSubmitForm() {
    this.jobForm.markAllAsTouched();

    if (this.jobForm.invalid) return;

    console.log(this.jobForm.value);

    this.submitOutput.emit(this.jobForm.value as JobFormModel);
  }
}
