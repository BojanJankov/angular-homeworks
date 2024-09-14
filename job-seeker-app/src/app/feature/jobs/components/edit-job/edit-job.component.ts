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

  selectedJob = this.jobsService.selectedJob;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.jobsService.getJobById(id);
  }

  onEditForm(formJob: JobFormModel) {
    const editedJob = {
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

    this.jobsService.editJob(this.selectedJob().id, editedJob);

    this.router.navigate(['jobs']);
  }
}
