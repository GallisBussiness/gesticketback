import { Test, TestingModule } from '@nestjs/testing';
import { HyqualiteController } from './hyqualite.controller';
import { HyqualiteService } from './hyqualite.service';

describe('HyqualiteController', () => {
  let controller: HyqualiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HyqualiteController],
      providers: [HyqualiteService],
    }).compile();

    controller = module.get<HyqualiteController>(HyqualiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
