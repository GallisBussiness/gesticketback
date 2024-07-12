import { Test, TestingModule } from '@nestjs/testing';
import { AttributionController } from './attribution.controller';
import { AttributionService } from './attribution.service';

describe('AttributionController', () => {
  let controller: AttributionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributionController],
      providers: [AttributionService],
    }).compile();

    controller = module.get<AttributionController>(AttributionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
