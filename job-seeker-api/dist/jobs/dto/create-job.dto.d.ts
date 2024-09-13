import { JobWorkType } from '../entities/job.entity';
export declare class CreateJobDto {
    expires: string;
    position: string;
    startingSalary: number;
    workType: JobWorkType;
    location: string;
    country: string;
    qualifications: string;
    jobDescription: string;
    companyName: string;
    companyLogo: string;
    companyAddress: string;
    companyIndustry: string;
    companyWebsite: string;
}
