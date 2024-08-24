import { computed, inject, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/job.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private router = inject(Router);
  jobs = signal<Job[]>(jobsMock);
  appliedJobs = signal<Job[]>([]);

  totalAppliedJobs = computed<number>(() => {
    return this.appliedJobs().length;
  });

  getJobById(id: number) {
    const foundJob = this.jobs().find((job) => job.id === id);

    if (!foundJob) this.router.navigate(['not-found']);

    return foundJob;
  }

  onApplyJob(id: number) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          job.isApplied = true;
          return job;
        } else {
          return job;
        }
      })
    );
    this.appliedJobs.set(this.jobs().filter((job) => job.isApplied));
  }

  onCancelJob(id: number) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          job.isApplied = false;
          return job;
        } else {
          return job;
        }
      })
    );

    this.appliedJobs.set(this.jobs().filter((job) => job.isApplied));
  }

  sortBySalary() {
    const copyArr = [...this.jobs()];
    copyArr.sort((a, b) => b.startingSalary - a.startingSalary);
    this.jobs.set(copyArr);
  }

  sortByWork(value: string) {
    let copyJobArray: Job[] = [...this.jobs()];

    copyJobArray = jobsMock.filter((job) => job.workType === value);

    this.jobs.set(copyJobArray);
  }

  resetFilter() {
    this.jobs.set(jobsMock);
  }
}
