import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { STATE_DECADAIRE } from '../dto/create-decadaire.dto';

export type DecadaireDocument = Decadaire & Document;

@Schema({ timestamps: true })
export class Decadaire {
  @Prop({ type: String, unique: true })
  nom: string;  

  @Prop({ type: Date, required: true, unique: true })
  debut: Date;

  @Prop({ type: Date, required: true })
  fin: Date;

  @Prop({ type: String, required: true, default: STATE_DECADAIRE.OUVERT })
  etat: string;
}

export const DecadaireSchema = SchemaFactory.createForClass(Decadaire);
