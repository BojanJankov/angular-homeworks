import { Component, inject, model, OnInit } from '@angular/core';
import { JobListComponent } from '../components/job-list/job-list.component';
import { ApplyJobListComponent } from '../components/apply-job-list/apply-job-list.component';
import { JobsService } from '../../../core/services/jobs.service';
import { JobWorkTypeFilter } from '../models/job.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [
    JobListComponent,
    ApplyJobListComponent,
    ButtonComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.scss',
})
export class JobPageComponent implements OnInit {
  readonly filterValue = JobWorkTypeFilter;
  private jobsService = inject(JobsService);
  searchValue = model<string>('');

  ngOnInit(): void {
    this.jobsService.getAllJobs();
  }

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
