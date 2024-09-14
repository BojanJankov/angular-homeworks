import { CommonModule } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Job, JobFormModel } from '../../models/job.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  jobForm = this.getJobForm();

  editFormData = input<Job>();
  submitOutput = output<JobFormModel>();

  textAreaMaxLength = 500;

  getJobForm() {
    return new FormGroup({
      expires: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      startingSalary: new FormControl<number>(null, [
        Validators.required,
        Validators.min(0),
      ]),
      workType: new FormControl(null, Validators.required),
      location: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      qualifications: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.textAreaMaxLength),
      ]),
      jobDescription: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.textAreaMaxLength),
      ]),
      companyLogo: new FormControl('', [
        Validators.required,
        this.urlValidator,
      ]),
      companyName: new FormControl('', Validators.required),
      companyAddress: new FormControl('', Validators.required),
      companyIndustry: new FormControl('', [Validators.required]),
      companyWebsite: new FormControl('', Validators.required),
    });
  }

  constructor() {
    effect(() => {
      if (this.editFormData()) {
        this.populateFormData(this.editFormData());
      }
    });
  }

  populateFormData(editJob: Job) {
    this.jobForm.setValue({
      position: editJob.position,
      expires: editJob.expires,
      startingSalary: editJob.startingSalary,
      workType: editJob.workType,
      location: editJob.location,
      country: editJob.country,
      qualifications: editJob.qualifications,
      jobDescription: editJob.jobDescription,
      companyLogo: editJob.companyLogo,
      companyName: editJob.companyName,
      companyAddress: editJob.companyAddress,
      companyIndustry: editJob.companyIndustry,
      companyWebsite: editJob.companyWebsite,
    });
  }

  onSubmitForm() {
    this.jobForm.markAllAsTouched();

    if (this.jobForm.invalid) return;

    console.log(this.jobForm.value);

    this.submitOutput.emit(this.jobForm.value as JobFormModel);
  }

  urlValidator(control: FormControl): { [key: string]: boolean } | null {
    if (!control.value.startsWith('http')) {
      return { validUrl: true };
    }
    return null;
  }
}
