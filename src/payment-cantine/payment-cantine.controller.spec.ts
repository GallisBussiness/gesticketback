import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCantineController } from './payment-cantine.controller';
import { PaymentCantineService } from './payment-cantine.service';

describe('PaymentCantineController', () => {
  let controller: PaymentCantineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentCantineController],
      providers: [PaymentCantineService],
    }).compile();

    controller = module.get<PaymentCantineController>(PaymentCantineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
