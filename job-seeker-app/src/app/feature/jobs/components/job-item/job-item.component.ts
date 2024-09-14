import { Component, inject, input } from '@angular/core';
import { Job } from '../../models/job.model';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ToogleDetailsDirective],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss',
})
export class JobItemComponent {
  private jobsService = inject(JobsService);
  private router = inject(Router);
  job = input<Job>();

  onApplyClick(id: number) {
    this.jobsService.onApplyJob(id);
  }

  onCompanyButtonNavigateClick(id: number) {
    this.router.navigate(['company', id]);
  }

  onEditNavigate(id: number) {
    this.router.navigate(['edit', id]);
  }
}
