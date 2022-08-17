import { PartialType } from '@nestjs/mapped-types';
import { CreateDecadaireDto } from './create-decadaire.dto';

export class UpdateDecadaireDto extends PartialType(CreateDecadaireDto) {}
