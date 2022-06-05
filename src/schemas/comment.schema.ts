import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string;

    @Prop({type: String, required: true})
    textarea: string;

    @Prop({ type: Date, default: Date })
    createdDate: Date;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);

















//@Prop([{ type: SchemaTypes.ObjectId, ref: 'TagEntity' }])  tags!: Types.ObjectId[];