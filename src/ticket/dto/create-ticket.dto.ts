import { IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  nom: string;

  @IsNumber()
  valeur: number;
}
