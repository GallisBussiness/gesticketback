import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Cantine } from "src/cantine/entities/cantine.entity";

export type AttributionDocument = HydratedDocument<Attribution>;

@Schema({timestamps: true})
export class Attribution {
    @Prop({type: Date,required: true,default: Date.now})
    date: string;

    @Prop({type: String,required: true})
    prenom_proprietaire: string;

    @Prop({type: String,required: true})
    nom_proprietaire: string;

    @Prop({type: String,required: true})
    tel_proprietaire: string;

    @Prop({type: String,required: true})
    nin_proprietaire: string;

    @Prop({type: Types.ObjectId,ref: Cantine.name, required: true,autopopulate: true})
    cantine: Cantine | string;

    @Prop({type:Boolean,required: true,default:true})
    etat: boolean;
}

export const AttributionSchema = SchemaFactory.createForClass(Attribution);