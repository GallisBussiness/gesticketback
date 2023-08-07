import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { STATE_DECADAIRE } from '../dto/create-decadaire.dto';

export type DecadaireDocument = Decadaire & Document;

@Schema({ timestamps: true })
export class Decadaire {
  @Prop({ type: String, unique: true })
  nom: string;

  @Prop({ type: String, required: true, unique: true })
  debut: string;

  @Prop({ type: String, required: true })
  fin: string;

  @Prop({ type: String, required: true, default: STATE_DECADAIRE.OUVERT })
  etat: string;
}

export const DecadaireSchema = SchemaFactory.createForClass(Decadaire);
