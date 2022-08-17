import { Test, TestingModule } from '@nestjs/testing';
import { DecadaireController } from './decadaire.controller';
import { DecadaireService } from './decadaire.service';

describe('DecadaireController', () => {
  let controller: DecadaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecadaireController],
      providers: [DecadaireService],
    }).compile();

    controller = module.get<DecadaireController>(DecadaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
