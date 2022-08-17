import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateFicheDto {
  @IsString()
  date: string;

  @IsNumber()
  nombre: number;

  @IsMongoId()
  decadaire: string;

  @IsMongoId()
  ticket: string;

  @IsMongoId()
  user: string;
}
