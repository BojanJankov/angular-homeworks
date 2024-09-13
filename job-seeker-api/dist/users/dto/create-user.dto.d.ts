export declare enum WorkStatus {
    SEARCHING = "searching",
    EMPLOYED = "employed",
    UNEMPLOYED = "unemployed"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    yearsOfExperience: number;
    workStatus: WorkStatus;
}
