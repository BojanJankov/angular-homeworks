import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../constants/core.constants';
import { Job, JobFormModel } from '../../feature/jobs/models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsApiService {
  private http = inject(HttpClient);

  fetchAllJobs() {
    return this.http.get<Job[]>(`${BASE_URL}/jobs`);
  }

  fetchJobById(id: number) {
    return this.http.get<Job>(`${BASE_URL}/jobs/${id}`);
  }

  crateJob(job: JobFormModel) {
    return this.http.post<Job>(`${BASE_URL}/jobs`, job);
  }

  editJob(id: number, jobData: JobFormModel) {
    return this.http.patch(`${BASE_URL}/jobs/${id}`, jobData);
  }
}
