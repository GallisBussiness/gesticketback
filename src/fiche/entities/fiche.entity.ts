import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Decadaire } from 'src/decadaire/entities/decadaire.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

export type FicheDocument = Fiche & Document;

@Schema({ timestamps: true })
export class Fiche {
  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: Number, required: true })
  nombre: number;

  @Prop({ type: Types.ObjectId, ref: Ticket.name })
  ticket: Ticket;

  @Prop({ type: Types.ObjectId, ref: Decadaire.name })
  decadaire: Decadaire;

  @Prop({ type: Types.ObjectId, ref: User.name })
  user: string;
}

export const FicheSchema = SchemaFactory.createForClass(Fiche);
