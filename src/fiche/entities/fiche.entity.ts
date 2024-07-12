import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types,Date } from 'mongoose';
import { Decadaire } from 'src/decadaire/entities/decadaire.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

export type FicheDocument = Fiche & Document;

@Schema({ timestamps: true})
export class Fiche {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Number, required: true })
  nombre: number;

  @Prop({ type: Types.ObjectId, ref: Ticket.name,required: true })
  ticket: Ticket;

  @Prop({ type: Types.ObjectId, ref: Decadaire.name,required: true,autopopulate: true })
  decadaire: Decadaire;
}

export const FicheSchema = SchemaFactory.createForClass(Fiche).index({date: 1, decadaire: 1,ticket:1}, {unique: true});
