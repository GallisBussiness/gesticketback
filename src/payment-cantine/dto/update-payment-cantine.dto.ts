import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentCantineDto } from './create-payment-cantine.dto';

export class UpdatePaymentCantineDto extends PartialType(CreatePaymentCantineDto) {}
