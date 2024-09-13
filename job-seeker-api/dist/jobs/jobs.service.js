"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_entity_1 = require("./entities/job.entity");
const typeorm_2 = require("typeorm");
let JobsService = class JobsService {
    constructor(jobRepo) {
        this.jobRepo = jobRepo;
    }
    create(createJobDto) {
        return this.jobRepo.save(createJobDto);
    }
    createMany(createJobDtoArray) {
        return this.jobRepo.save(createJobDtoArray);
    }
    findAll() {
        return this.jobRepo.find({});
    }
    async findOne(id) {
        const foundJob = await this.jobRepo.findOneBy({ id });
        if (!foundJob)
            throw new common_1.NotFoundException('Job not found');
        return foundJob;
    }
    async update(id, updateJobDto) {
        const foundJob = await this.findOne(id);
        Object.assign(foundJob, updateJobDto);
        return this.jobRepo.save(foundJob);
    }
    async remove(id) {
        const foundJob = await this.findOne(id);
        return this.jobRepo.remove(foundJob);
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_entity_1.Job)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobsService);
//# sourceMappingURL=jobs.service.js.map