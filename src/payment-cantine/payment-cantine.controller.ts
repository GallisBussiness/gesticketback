import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentCantineService } from './payment-cantine.service';
import { CreatePaymentCantineDto } from './dto/create-payment-cantine.dto';
import { UpdatePaymentCantineDto } from './dto/update-payment-cantine.dto';

@Controller('payment-cantine')
export class PaymentCantineController {
  constructor(private readonly paymentCantineService: PaymentCantineService) {}

  @Post()
  create(@Body() createPaymentCantineDto: CreatePaymentCantineDto) {
    return this.paymentCantineService.create(createPaymentCantineDto);
  }

  @Get()
  findAll() {
    return this.paymentCantineService.findAll();
  }

  @Get('bycantine/:id')
  findByCantine(@Param('id') id: string) {
    return this.paymentCantineService.findByCantine(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentCantineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentCantineDto: UpdatePaymentCantineDto) {
    return this.paymentCantineService.update(id, updatePaymentCantineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentCantineService.remove(id);
  }
}
