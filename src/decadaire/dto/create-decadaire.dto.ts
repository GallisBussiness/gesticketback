import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum STATE_DECADAIRE {
  OUVERT = 'ouvert',
  FERMER = 'ferme',
}

export class CreateDecadaireDto {

  @IsString()
  debut: string;

  @IsOptional()
  @IsEnum(STATE_DECADAIRE)
  etat: string;
}
