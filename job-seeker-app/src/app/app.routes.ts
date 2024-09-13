import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobPageComponent } from './feature/jobs/job-page/job-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ComapnyDetailsComponent } from './feature/jobs/components/comapny-details/comapny-details.component';
import { ProfilePanelComponent } from './feature/auth/components/profile-panel/profile-panel.component';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';
import { AddJobComponent } from './feature/jobs/components/add-job/add-job.component';
import { EditJobComponent } from './feature/jobs/components/edit-job/edit-job.component';
import { RegisterComponent } from './feature/auth/components/register/register.component';
import { LoginComponent } from './feature/auth/components/login/login.component';

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
    path: 'add-job',
    component: AddJobComponent,
  },
  {
    path: 'edit/:id',
    component: EditJobComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
