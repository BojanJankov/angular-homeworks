import { Component, inject } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { Job, JobFormModel } from '../../models/job.model';
import { JobsService } from '../../../../core/services/jobs.service';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

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

  onAddJob(formJob: JobFormModel) {
    console.log(this.jobsService.jobs.length);
    const newJob: Job = {
      id: uuid(),
      company: {
        logo: formJob.logo,
        name: formJob.name,
        employees: formJob.employees,
        companyDescription: formJob.companyDescription,
        state: formJob.state,
        website: formJob.website,
      },
      expires: formJob.expires,
      position: formJob.position,
      startingSalary: formJob.startingSalary,
      workType: formJob.workType,
      location: formJob.location,
      country: formJob.country,
      qualifications: formJob.qualifications,
      description: formJob.description,
      isApplied: false,
    };

    this.jobsService.addJob(newJob);

    console.log(newJob);

    this.router.navigate(['jobs']);
  }
}
