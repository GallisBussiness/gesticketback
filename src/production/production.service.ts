import { Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Production, ProductionDocument } from './entities/production.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductionService extends AbstractModel<Production,CreateProductionDto,UpdateProductionDto>{
 constructor(@InjectModel(Production.name) private productionModel: Model<ProductionDocument>){
  super(productionModel);
 }
}
