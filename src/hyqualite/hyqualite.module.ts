import { Module } from '@nestjs/common';
import { HyqualiteService } from './hyqualite.service';
import { HyqualiteController } from './hyqualite.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hyqualite, HyqualiteSchema } from './entities/hyqualite.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name:Hyqualite.name,useFactory:() => {
    const schema = HyqualiteSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [HyqualiteController],
  providers: [HyqualiteService]
})
export class HyqualiteModule {}
