import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/job.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobsMock);
  appliedJobs = signal<Job[]>([]);
  totalJobs = computed<number>(() => {
    return this.jobs().length;
  });
  totalAppliedJobs = computed<number>(() => {
    return this.appliedJobs().length;
  });

  onApplyJob(id: number) {
    const isExists = this.appliedJobs().find((job) => job.id === id);

    if (isExists) return;

    const foundJob = this.jobs().find((job) => job.id === id);

    if (!foundJob) return;

    const updatedJobs = this.jobs().filter((job) => job.id !== id);

    this.jobs.set(updatedJobs);
    this.appliedJobs.update((prev) => [...prev, foundJob]);
  }

  onCancelJob(id: number) {
    const updatedAppliedJobs = this.appliedJobs().filter(
      (job) => job.id !== id
    );

    const foundJob = this.appliedJobs().find((job) => job.id === id);

    this.jobs.update((prev) => [...prev, foundJob]);

    this.appliedJobs.set(updatedAppliedJobs);
  }

  sortBySalary() {
    this.jobs().sort((a, b) => a.startingSalary - b.startingSalary);
  }

  sortByWork(value: string) {
    const filteredList = this.jobs().filter((job) => job.workType === value);

    this.jobs.set(filteredList);
  }

  resetFilter() {
    this.jobs.set(jobsMock);
  }
}
