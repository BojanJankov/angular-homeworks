import { Component, computed, inject, input } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../models/job.model';
import { ApplyJobItemComponent } from '../apply-job-item/apply-job-item.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../../core/pipes/filter.pipe';

@Component({
  selector: 'app-apply-job-list',
  standalone: true,
  imports: [ApplyJobItemComponent, CommonModule, FilterPipe],
  templateUrl: './apply-job-list.component.html',
  styleUrl: './apply-job-list.component.scss',
})
export class ApplyJobListComponent {
  private jobService = inject(JobsService);
  searchValue = input<string>();
  appliedJobs = computed<Job[]>(() => {
    return this.jobService.filteredJobs().filter((job) => job.isApplied);
  });
  totalAppliedJobNumer = this.jobService.totalAppliedJobs;
}
