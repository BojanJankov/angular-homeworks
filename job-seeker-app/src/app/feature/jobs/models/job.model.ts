export interface Job {
  id: string;
  company: {
    logo: string;
    name: string;
    employees: string;
    companyDescription: string;
    state: string;
    website: string;
  };
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

export interface JobFormModel {
  logo: string;
  name: string;
  employees: string;
  companyDescription: string;
  state: string;
  website: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'onsite' | 'remote' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  description: string;
}
