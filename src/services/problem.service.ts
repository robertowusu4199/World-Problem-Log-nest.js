import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Problem, ProblemDocument } from "../schemas/problem.schema";

@Injectable()
export class ProblemService {

    constructor(@InjectModel(Problem.name) private problemModel: Model<ProblemDocument>) {}

    async create(problem: Problem): Promise<Problem> {
        const newProblem = new this.problemModel(problem);
        return newProblem.save();
    }

    async readAll(): Promise<Problem[]> {
        return await this.problemModel.find().exec()
    }

    async readById(id): Promise<Problem> {
        return await this.problemModel.findById(id).exec();
    }
    
    async update(id, problem: Problem): Promise<Problem> {
        return await this.problemModel.findByIdAndUpdate(id, problem, {new: true})
    }
    
}


// async readByOne(textarea): Promise<Problem> {
//     return await this.problemModel.findOne({ textarea }).exec();
// }