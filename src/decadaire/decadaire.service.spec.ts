import { Test, TestingModule } from '@nestjs/testing';
import { DecadaireService } from './decadaire.service';

describe('DecadaireService', () => {
  let service: DecadaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecadaireService],
    }).compile();

    service = module.get<DecadaireService>(DecadaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
