import { Test, TestingModule } from '@nestjs/testing';
import { CantineService } from './cantine.service';

describe('CantineService', () => {
  let service: CantineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CantineService],
    }).compile();

    service = module.get<CantineService>(CantineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
