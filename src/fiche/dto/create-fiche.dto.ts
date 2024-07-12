import { IsMongoId, IsNumber, IsString} from 'class-validator';

export class CreateFicheDto {
  @IsString()
  date: Date;

  @IsNumber()
  nombre: number;

  @IsMongoId()
  decadaire: string;

  @IsMongoId()
  ticket: string;

}
