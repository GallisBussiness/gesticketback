import { Module } from '@nestjs/common';
import { DecadaireService } from './decadaire.service';
import { DecadaireController } from './decadaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Decadaire, DecadaireSchema } from './entities/decadaire.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Decadaire.name, useFactory:() => {
        const schema = DecadaireSchema;
        schema.plugin(require("mongoose-serial"),{field:"nom", prefix: "DECAD",separator:"-"})
        return schema;
      } },
    ]),
    CaslModule,
  ],
  controllers: [DecadaireController],
  providers: [DecadaireService],
})
export class DecadaireModule {}
