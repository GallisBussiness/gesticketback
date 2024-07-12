import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CantineDocument = HydratedDocument<Cantine>;

@Schema({timestamps: true})
export class Cantine {
@Prop({type: Number,required: true})
numero:number;
}

export const CantineSchema = SchemaFactory.createForClass(Cantine);