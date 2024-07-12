import { Injectable } from '@nestjs/common';
import { CreateAttributionDto } from './dto/create-attribution.dto';
import { UpdateAttributionDto } from './dto/update-attribution.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Attribution, AttributionDocument } from './entities/attribution.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AttributionService extends AbstractModel<Attribution,CreateAttributionDto,UpdateAttributionDto>{
 constructor(@InjectModel(Attribution.name) private readonly attModel: Model<AttributionDocument>){
  super(attModel);
 }
}
