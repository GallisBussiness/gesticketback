import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { add, parseISO } from 'date-fns';
import { Model } from 'mongoose';
import { CreateDecadaireDto } from './dto/create-decadaire.dto';
import { UpdateDecadaireDto } from './dto/update-decadaire.dto';
import { Decadaire, DecadaireDocument } from './entities/decadaire.entity';

@Injectable()
export class DecadaireService {
  constructor(
    @InjectModel(Decadaire.name)
    private decadaireModel: Model<DecadaireDocument>,
  ) {}
  async create(createDecadaireDto: CreateDecadaireDto): Promise<Decadaire> {
    try {
      const createdDecadaire = new this.decadaireModel(createDecadaireDto);
      createdDecadaire.fin = add(parseISO(createdDecadaire.debut), {
        days: 10,
      }).toISOString();
      return await createdDecadaire.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Decadaire[]> {
    try {
      return await this.decadaireModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Decadaire> {
    try {
      return await this.decadaireModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateDecadaireDto: UpdateDecadaireDto,
  ): Promise<Decadaire> {
    try {
      const fin = add(parseISO(updateDecadaireDto.debut), {
        days: 10,
      }).toISOString();
      return await this.decadaireModel.findByIdAndUpdate(id, {
        ...updateDecadaireDto,
        fin,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Decadaire> {
    try {
      return await this.decadaireModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
