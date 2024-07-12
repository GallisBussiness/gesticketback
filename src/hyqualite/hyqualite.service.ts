import { Injectable } from '@nestjs/common';
import { CreateHyqualiteDto } from './dto/create-hyqualite.dto';
import { UpdateHyqualiteDto } from './dto/update-hyqualite.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Hyqualite, HyqualiteDocument } from './entities/hyqualite.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HyqualiteService extends AbstractModel<Hyqualite,CreateHyqualiteDto,UpdateHyqualiteDto>{
  constructor(@InjectModel(Hyqualite.name) private readonly hyqModel: Model<HyqualiteDocument>){
    super(hyqModel);
  }
}
