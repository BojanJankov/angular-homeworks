import { Component, inject, OnInit, signal } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { JobsService } from '../../../../core/services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, JobFormModel } from '../../models/job.model';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.scss',
})
export class EditJobComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private jobsService = inject(JobsService);

  selectedJob = signal<Job>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    const foundJob = this.jobsService.getJobById(id);

    this.selectedJob.set(foundJob);
  }

  onEditForm(formJob: JobFormModel) {
    const editedJob: Job = {
      id: this.selectedJob().id,
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

    this.jobsService.editJob(editedJob);

    this.router.navigate(['jobs']);
  }
}
