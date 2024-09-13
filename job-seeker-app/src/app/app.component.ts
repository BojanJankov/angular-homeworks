import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { JobListComponent } from './feature/jobs/components/job-list/job-list.component';
import { ApplyJobListComponent } from './feature/jobs/components/apply-job-list/apply-job-list.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ScrollToTopBtnComponent } from './shared/components/scroll-to-top-btn/scroll-to-top-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    JobListComponent,
    ApplyJobListComponent,
    FooterComponent,
    ScrollToTopBtnComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'job-seeker-app';
}
