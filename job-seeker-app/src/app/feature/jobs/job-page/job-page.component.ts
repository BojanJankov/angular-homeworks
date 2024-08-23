import { Component } from '@angular/core';
import { JobListComponent } from '../components/job-list/job-list.component';
import { ApplyJobListComponent } from '../components/apply-job-list/apply-job-list.component';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [JobListComponent, ApplyJobListComponent],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.scss',
})
export class JobPageComponent {}
