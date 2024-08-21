import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../models/job.model';
import { ApplyJobItemComponent } from '../apply-job-item/apply-job-item.component';

@Component({
  selector: 'app-apply-job-list',
  standalone: true,
  imports: [ApplyJobItemComponent],
  templateUrl: './apply-job-list.component.html',
  styleUrl: './apply-job-list.component.scss',
})
export class ApplyJobListComponent {
  private jobService = inject(JobsService);
  appliedJobs = computed<Job[]>(() => {
    return this.jobService.appliedJobs();
  });
  totalAppliedJobNumer = computed<number>(() => {
    return this.jobService.totalAppliedJobs();
  });
}
