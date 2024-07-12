import { Module } from '@nestjs/common';
import { CantineService } from './cantine.service';
import { CantineController } from './cantine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cantine, CantineSchema } from './entities/cantine.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Cantine.name,schema: CantineSchema}])],
  controllers: [CantineController],
  providers: [CantineService]
})
export class CantineModule {}
