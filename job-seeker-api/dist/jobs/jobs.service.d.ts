import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { Repository } from 'typeorm';
export declare class JobsService {
    private jobRepo;
    constructor(jobRepo: Repository<Job>);
    create(createJobDto: CreateJobDto): Promise<CreateJobDto & Job>;
    createMany(createJobDtoArray: CreateJobDto[]): Promise<(CreateJobDto & Job)[]>;
    findAll(): Promise<Job[]>;
    findOne(id: number): Promise<Job>;
    update(id: number, updateJobDto: UpdateJobDto): Promise<Job>;
    remove(id: number): Promise<Job>;
}
