import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema({ timestamps: true })
export class Ticket {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: Number, required: true })
  valeur: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
