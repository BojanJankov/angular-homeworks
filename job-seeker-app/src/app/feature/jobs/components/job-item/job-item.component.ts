import { Component, inject, input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ToogleDetailsDirective],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss',
})
export class JobItemComponent {
  private jobsService = inject(JobsService);
  job = input<Job>();

  onApplyClick(id: number) {
    this.jobsService.onApplyJob(id);
  }
}
