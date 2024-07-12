import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';
import { Fiche, FicheDocument } from './entities/fiche.entity';

@Injectable()
export class FicheService {
  constructor(
    @InjectModel(Fiche.name)
    private ficheModel: Model<FicheDocument>,
  ) {}

  async create(createFicheDto: CreateFicheDto): Promise<Fiche> {
    try {
      const createdFiche = new this.ficheModel(createFicheDto);
      return await createdFiche.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find()
        .populate(['decadaire', 'ticket']).sort({ createdAt: -1 });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllByUser(id: string): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find({ user: id })
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllFicheByDecadaire(id: string): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find({ decadaire: id })
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllFicheByTicket(id: string): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find({ ticket: id })
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllFicheByUser(id: string): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find({ user: id })
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllFicheByDecadaireAndTicket(dto: {
    ticket: string;
    decadaire: string;
  }): Promise<Fiche[]> {
    try {
      return await this.ficheModel
        .find({
          $and: [{ ticket: dto.ticket }, { decadaire: dto.decadaire }],
        })
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Fiche> {
    try {
      return await this.ficheModel
        .findById(id)
        .populate(['decadaire', 'ticket']);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateFicheDto: UpdateFicheDto): Promise<Fiche> {
    try {
      return await this.ficheModel.findByIdAndUpdate(id, updateFicheDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Fiche> {
    try {
      return await this.ficheModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
