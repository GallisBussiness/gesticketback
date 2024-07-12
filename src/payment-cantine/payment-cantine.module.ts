import { Module } from '@nestjs/common';
import { PaymentCantineService } from './payment-cantine.service';
import { PaymentCantineController } from './payment-cantine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentCantine, PaymentCantineSchema } from './entities/payment-cantine.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name:PaymentCantine.name,useFactory:()=>  {
    const schema = PaymentCantineSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
}}])],
  controllers: [PaymentCantineController],
  providers: [PaymentCantineService]
})
export class PaymentCantineModule {}
