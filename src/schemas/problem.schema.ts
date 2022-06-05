import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';

export type ProblemDocument = Problem & Document;

@Schema({ timestamps: true })
export class Problem {

    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string;

    @Prop({type: String, required: true})
    textarea: string;

    @Prop({ default: Date.now })  
    createdAt!: Date;

    @Prop({ default: Date.now })  
    updatedAt!: Date;

}

export const ProblemSchema = SchemaFactory.createForClass(Problem);










//@Prop({ type: Date, default: Date.Now })
// @Prop({ default: Date.now })  
//     createdAt!: Date;

//     @Prop({ default: Date.now })  
//     updatedAt!: Date;