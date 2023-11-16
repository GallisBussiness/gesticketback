import { Module } from '@nestjs/common';
import { ProductionService } from './production.service';
import { ProductionController } from './production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Production, ProductionSchema } from './entities/production.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Production.name, useFactory: () => {
    const schema =  ProductionSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [ProductionController],
  providers: [ProductionService]
})
export class ProductionModule {}
