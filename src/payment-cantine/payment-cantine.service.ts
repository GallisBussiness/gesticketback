import { HttpException, Injectable } from '@nestjs/common';
import { CreatePaymentCantineDto } from './dto/create-payment-cantine.dto';
import { UpdatePaymentCantineDto } from './dto/update-payment-cantine.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { PaymentCantine, PaymentCantineDocument } from './entities/payment-cantine.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PaymentCantineService extends AbstractModel<PaymentCantine,CreatePaymentCantineDto,UpdatePaymentCantineDto>{
 constructor(@InjectModel(PaymentCantine.name) private readonly pcantineModel: Model<PaymentCantineDocument>){
  super(pcantineModel);
 }
 async findByCantine(id: string): Promise<PaymentCantine[]>{
  try {
    return await this.pcantineModel.find({cantine:id});
  } catch (error) {
    throw new HttpException(error.message,500);
  }
 }
}
