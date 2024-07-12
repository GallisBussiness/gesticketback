import { Test, TestingModule } from '@nestjs/testing';
import { CantineController } from './cantine.controller';
import { CantineService } from './cantine.service';

describe('CantineController', () => {
  let controller: CantineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CantineController],
      providers: [CantineService],
    }).compile();

    controller = module.get<CantineController>(CantineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
