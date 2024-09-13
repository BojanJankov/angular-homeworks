import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(createJobDto: CreateJobDto): Promise<CreateJobDto & import("./entities/job.entity").Job>;
    createMany(createJobDtoArr: CreateJobDto[]): Promise<(CreateJobDto & import("./entities/job.entity").Job)[]>;
    findAll(): Promise<import("./entities/job.entity").Job[]>;
    findOne(id: string): Promise<import("./entities/job.entity").Job>;
    update(id: string, updateJobDto: UpdateJobDto): Promise<import("./entities/job.entity").Job>;
    remove(id: string): Promise<import("./entities/job.entity").Job>;
}
