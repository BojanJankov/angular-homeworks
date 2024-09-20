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
import { authGuard, loginRegisterGuard } from './core/guards';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-job',
    component: AddJobComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit/:id',
    component: EditJobComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: ProfilePanelComponent,
    canActivate: [authGuard],
  },
  {
    path: 'company/:id',
    component: ComapnyDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginRegisterGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginRegisterGuard],
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
