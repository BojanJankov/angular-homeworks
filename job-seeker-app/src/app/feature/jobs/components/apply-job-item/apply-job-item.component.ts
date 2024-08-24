import { Component, inject, input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-job-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ToogleDetailsDirective],
  templateUrl: './apply-job-item.component.html',
  styleUrl: './apply-job-item.component.scss',
})
export class ApplyJobItemComponent {
  private jobService = inject(JobsService);
  private router = inject(Router);
  appliedJob = input<Job>(null);

  onCancelClick(id: number) {
    this.jobService.onCancelJob(id);
  }

  onCompanyButtonNavigateClick(id: number) {
    this.router.navigate(['company', id]);
  }
}
