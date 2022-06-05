import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Problem } from "../schemas/problem.schema";
import { ProblemService } from "../services/problem.service";

@Controller('problem')
export class ProblemController {
    constructor(private readonly problemService: ProblemService) {}

    @Post()
    async createProblem(@Res() response, @Body() problem: Problem) {
        const newProblem = await this.problemService.create(problem)
        return response.status(HttpStatus.CREATED).json({
            newProblem
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const problems = await this.problemService.readAll();
        return response.status(HttpStatus.OK).json({
            problems
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const problem = await this.problemService.readById(id);
        return response.status(HttpStatus.OK).json({
            problem
        })
    }
    
    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() problem: Problem) {
        const updateProblem = await this.problemService.update(id, problem);
        return response.status(HttpStatus.OK).json({
            updateProblem
        })
    }

}


// @Get('/:textarea')
// async findOne(@Param('textarea') textarea: string) {
//     return await this.problemService.readByOne(textarea)
//     // const problem = await this.problemService.readByOne(textarea);
//     // return response.status(HttpStatus.OK).json({$problem:{}});
// }