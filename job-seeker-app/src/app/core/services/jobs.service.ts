import {
  computed,
  effect,
  inject,
  Injectable,
  OnInit,
  signal,
} from '@angular/core';
import { Job, JobFormModel } from '../../feature/jobs/models/job.model';
import { JobsApiService } from './jobs-api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiService = inject(JobsApiService);

  jobs = signal<Job[]>([]);
  selectedJob = signal<Job>(null);
  filteredJobs = signal<Job[]>([]);

  totalAppliedJobs = computed<number>(() => {
    return this.jobs().filter((job) => job.isApplied).length;
  });

  constructor() {
    effect(
      () => {
        this.filteredJobs.set(this.jobs());
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  getAllJobs() {
    this.apiService
      .fetchAllJobs()
      .pipe(
        map((jobs: Job[]) =>
          jobs.map((job) => {
            return { ...job, isApplied: false };
          })
        )
      )
      .subscribe({
        next: (value) => {
          console.log(value);
          this.jobs.set(value);
        },
        error: (error) => console.log(error),
      });
  }

  getJobById(id: string) {
    return this.apiService.fetchJobById(+id).subscribe({
      next: (job) => {
        this.selectedJob.set(job);
      },
      error: (error) => console.log(error),
    });
  }

  addJob(job: JobFormModel) {
    this.apiService.crateJob(job).subscribe({
      next: () => {
        console.log('job added');
      },
      error: (error) => console.log(error),
    });
  }

  editJob(id: number, editedJob: JobFormModel) {
    this.apiService.editJob(id, editedJob).subscribe({
      next: () => {
        console.log('job eddited');
      },
      error: (error) => console.log(error),
    });
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
  }

  sortBySalary() {
    const copyArr = [...this.jobs()];
    copyArr.sort((a, b) => b.startingSalary - a.startingSalary);
    this.filteredJobs.set(copyArr);
  }

  sortByWork(value: string) {
    let copyJobArray: Job[] = [...this.jobs()];

    this.filteredJobs.set(copyJobArray.filter((job) => job.workType === value));
  }

  resetFilter() {
    this.filteredJobs.set(this.jobs());
  }
}
