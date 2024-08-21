import { Component, inject, input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
  selector: 'app-apply-job-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './apply-job-item.component.html',
  styleUrl: './apply-job-item.component.scss',
})
export class ApplyJobItemComponent {
  private jobService = inject(JobsService);
  appliedJob = input<Job>(null);

  onCancelClick(id: number) {
    this.jobService.onCancelJob(id);
  }
}
