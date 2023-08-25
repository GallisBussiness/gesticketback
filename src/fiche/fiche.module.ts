import { Module } from '@nestjs/common';
import { FicheService } from './fiche.service';
import { FicheController } from './fiche.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fiche, FicheSchema } from './entities/fiche.entity';
import { CaslModule } from 'src/casl/casl.module';
import { DecadaireModule } from 'src/decadaire/decadaire.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fiche.name, schema: FicheSchema }]),
    CaslModule,
    DecadaireModule
  ],
  controllers: [FicheController],
  providers: [FicheService],
})
export class FicheModule {}
