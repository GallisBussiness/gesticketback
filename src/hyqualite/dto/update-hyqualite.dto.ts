import { PartialType } from '@nestjs/mapped-types';
import { CreateHyqualiteDto } from './create-hyqualite.dto';

export class UpdateHyqualiteDto extends PartialType(CreateHyqualiteDto) {}
