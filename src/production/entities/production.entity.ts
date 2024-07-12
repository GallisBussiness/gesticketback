import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Decadaire } from "src/decadaire/entities/decadaire.entity";

export type ProductionDocument = HydratedDocument<Production>;

@Schema({timestamps: true})
export class Production {
@Prop({type: Date,required: true})
date: Date;

@Prop({type: Number, required: true})
quantite: number;

@Prop({type: String, required: true})
designation: string;

@Prop({type: String})
observation: string;

@Prop({type: Object,required: true})
matin: object;

@Prop({type: Object,required: true})
soir: object;

@Prop({type: Types.ObjectId, ref: Decadaire.name,required: true,autopopulate: true})
decadaire: Decadaire | string;
}

export const ProductionSchema = SchemaFactory.createForClass(Production).index({date: 1, decadaire: 1}, {unique: true});