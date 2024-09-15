import { Component, computed, inject, input } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job, JobWorkTypeFilter } from '../../models/job.model';
import { JobItemComponent } from '../job-item/job-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../../core/pipes/filter.pipe';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [
    JobItemComponent,
    ButtonComponent,
    FormsModule,
    CommonModule,
    FilterPipe,
  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  readonly filterValue = JobWorkTypeFilter;
  private jobsService = inject(JobsService);
  searchValue = input<string>();

  jobs = computed<Job[]>(() => {
    return this.jobsService.filteredJobs().filter((job) => !job.isApplied);
  });
}
