import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/jobs/models/job.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Job[], searchValue: string): Job[] {
    if (!searchValue) return value;

    const filteredJobs = value.filter((job) =>
      job.position.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    return filteredJobs;
  }
}
