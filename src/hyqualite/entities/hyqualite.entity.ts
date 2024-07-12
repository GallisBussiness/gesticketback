import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Decadaire } from "src/decadaire/entities/decadaire.entity";

export type HyqualiteDocument = HydratedDocument<Hyqualite>

@Schema({timestamps: true})
export class Hyqualite {

    _id:string;

    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({type:String, required:true})
    restaut: string;

    @Prop({type:Object, required:true})
    petitDej: object;

    @Prop({type:Object, required:true})
    dejeuner: object;

    @Prop({type:Object, required:true})
    diner: object;

    @Prop({type:Types.ObjectId,ref: Decadaire.name, required:true,autopopulate:true})
    decadaire: Decadaire;
}


export const  HyqualiteSchema = SchemaFactory.createForClass(Hyqualite);
