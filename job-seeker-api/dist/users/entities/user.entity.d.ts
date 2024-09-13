import { WorkStatus } from '../dto/create-user.dto';
export declare class User {
    id: string;
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    yearsOfExperience: number;
    workStatus: WorkStatus;
    refreshTokens: string[];
}
