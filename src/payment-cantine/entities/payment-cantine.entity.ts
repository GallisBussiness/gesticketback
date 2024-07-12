import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Attribution } from "src/attribution/entities/attribution.entity";

export type PaymentCantineDocument = HydratedDocument<PaymentCantine>;

@Schema({timestamps: true})
export class PaymentCantine {
    @Prop({type: Number,required: true})
    annee: number;

    @Prop({type: Number,required: true})
    mois: number;

    @Prop({type: Number,required: true})
    montant:number;

    @Prop({type: Types.ObjectId,ref: Attribution.name,required:true,autopopulate: true})
    attribution: Attribution;
}

export const PaymentCantineSchema = SchemaFactory.createForClass(PaymentCantine);