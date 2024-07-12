import { PartialType } from '@nestjs/mapped-types';
import { CreateCantineDto } from './create-cantine.dto';

export class UpdateCantineDto extends PartialType(CreateCantineDto) {}
