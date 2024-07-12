import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCantineService } from './payment-cantine.service';

describe('PaymentCantineService', () => {
  let service: PaymentCantineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentCantineService],
    }).compile();

    service = module.get<PaymentCantineService>(PaymentCantineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
