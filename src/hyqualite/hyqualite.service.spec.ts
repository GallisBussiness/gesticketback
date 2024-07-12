import { Test, TestingModule } from '@nestjs/testing';
import { HyqualiteService } from './hyqualite.service';

describe('HyqualiteService', () => {
  let service: HyqualiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HyqualiteService],
    }).compile();

    service = module.get<HyqualiteService>(HyqualiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
