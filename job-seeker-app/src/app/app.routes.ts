import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobPageComponent } from './feature/jobs/job-page/job-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ComapnyDetailsComponent } from './feature/jobs/components/comapny-details/comapny-details.component';
import { ProfilePanelComponent } from './feature/auth/components/profile-panel/profile-panel.component';
import { AboutComponent } from './feature/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    component: ProfilePanelComponent,
  },
  {
    path: 'company/:id',
    component: ComapnyDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
