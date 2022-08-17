import { Module } from '@nestjs/common';
import { DecadaireService } from './decadaire.service';
import { DecadaireController } from './decadaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Decadaire, DecadaireSchema } from './entities/decadaire.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Decadaire.name, schema: DecadaireSchema },
    ]),
    CaslModule,
  ],
  controllers: [DecadaireController],
  providers: [DecadaireService],
})
export class DecadaireModule {}
