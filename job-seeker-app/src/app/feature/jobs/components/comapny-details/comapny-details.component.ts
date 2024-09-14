import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-comapny-details',
  standalone: true,
  imports: [],
  templateUrl: './comapny-details.component.html',
  styleUrl: './comapny-details.component.scss',
})
export class ComapnyDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private jobService = inject(JobsService);
  paramId: string;
  selectedJob = this.jobService.selectedJob;
  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];

    this.jobService.getJobById(this.paramId);
  }
}
