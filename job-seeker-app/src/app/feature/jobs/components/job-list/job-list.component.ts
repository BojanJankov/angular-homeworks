import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job, JobWorkTypeFilter } from '../../models/job.model';
import { JobItemComponent } from '../job-item/job-item.component';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent, ButtonComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  readonly filterValue = JobWorkTypeFilter;
  private jobsService = inject(JobsService);
  totalJobNumer = computed<number>(() => {
    return this.jobsService.totalJobs();
  });
  jobs = computed<Job[]>(() => {
    return this.jobsService.jobs();
  });

  onClickSort() {
    this.jobsService.sortBySalary();
  }

  onFilterButtonClick(value: string) {
    this.jobsService.sortByWork(value);
  }

  onResetClick() {
    this.jobsService.resetFilter();
  }
}
