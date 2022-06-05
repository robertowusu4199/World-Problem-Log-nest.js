import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment, CommentDocument } from "../schemas/comment.schema";

@Injectable()
export class CommentService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(comment: Comment): Promise<Comment> {
        const newComment = new this.commentModel(comment)
        return newComment.save();
    }

    async readAll(): Promise<Comment[]> {
        return await this.commentModel.find().exec()
    }

    async readById(id): Promise<Comment> {
        return await this.commentModel.findById(id).exec();
    }

}