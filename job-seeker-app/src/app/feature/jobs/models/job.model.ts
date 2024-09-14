export interface Job {
  id: number;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  companyIndustry: string;
  companyWebsite: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'onsite' | 'remote' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  jobDescription: string;
  isApplied: boolean;
}

export enum JobWorkTypeFilter {
  REMOTE = 'remote',
  HYBRID = 'hybrid',
  ONSITE = 'onsite',
}

export interface JobFormModel {
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  companyIndustry: string;
  companyWebsite: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'onsite' | 'remote' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  jobDescription: string;
}
