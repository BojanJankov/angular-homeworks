export interface Job {
  id: number;
  company: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'onsite' | 'remote' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
}

export enum JobWorkTypeFilter {
  REMOTE = 'remote',
  HYBRID = 'hybrid',
  ONSITE = 'onsite',
}
