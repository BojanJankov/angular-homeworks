import { Component, inject } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { JobFormModel } from '../../models/job.model';
import { JobsService } from '../../../../core/services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss',
})
export class AddJobComponent {
  private router = inject(Router);
  private jobsService = inject(JobsService);

  jobId = this.jobsService.jobs.length;

  onAddJob(formJob: JobFormModel) {
    const newJob = {
      companyLogo: formJob.companyLogo,
      companyName: formJob.companyName,
      companyAddress: formJob.companyAddress,
      companyIndustry: formJob.companyIndustry,
      companyWebsite: formJob.companyWebsite,
      expires: formJob.expires,
      position: formJob.position,
      startingSalary: formJob.startingSalary,
      workType: formJob.workType,
      location: formJob.location,
      country: formJob.country,
      qualifications: formJob.qualifications,
      jobDescription: formJob.jobDescription,
    };

    this.jobsService.addJob(newJob);

    this.router.navigate(['jobs']);
  }
}
