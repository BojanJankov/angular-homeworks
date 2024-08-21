import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/job.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobsMock);
  appliedJobs = signal<Job[]>([]);

  totalAppliedJobs = computed<number>(() => {
    return this.appliedJobs().length;
  });

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
