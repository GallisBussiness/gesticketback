import { Module } from '@nestjs/common';
import { AttributionService } from './attribution.service';
import { AttributionController } from './attribution.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attribution, AttributionSchema } from './entities/attribution.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: Attribution.name,useFactory:() => {
    const schema =  AttributionSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
}}])],
  controllers: [AttributionController],
  providers: [AttributionService]
})
export class AttributionModule {}
