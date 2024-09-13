export declare enum JobWorkType {
    REMOTE = "remote",
    ONSITE = "onsite",
    HYBRID = "hybrid"
}
export declare class Job {
    id: number;
    expires: Date;
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
