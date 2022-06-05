import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Comment } from "../schemas/comment.schema";
import { CommentService } from "../services/comment.service";

@Controller('comment')
export class CommentController{
    constructor(private readonly commentService: CommentService) {}

    @Post()
    async createComment(@Res() response, @Body() comment: Comment) {
        const newComment = await this.commentService.create(comment)
        return response.status(HttpStatus.CREATED).json({
            newComment
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const comments = await this.commentService.readAll();
        return response.status(HttpStatus.OK).json({
            comments
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const comment = await this.commentService.readById(id);
        return response.status(HttpStatus.OK).json({
            comment
        })
    }

}