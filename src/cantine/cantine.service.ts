import { Injectable } from '@nestjs/common';
import { CreateCantineDto } from './dto/create-cantine.dto';
import { UpdateCantineDto } from './dto/update-cantine.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Cantine, CantineDocument } from './entities/cantine.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CantineService extends AbstractModel<Cantine,CreateCantineDto,UpdateCantineDto>{
  constructor(@InjectModel(Cantine.name) private readonly cantineModel: Model<CantineDocument>){
    super(cantineModel);
  }
}
