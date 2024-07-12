import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CantineService } from './cantine.service';
import { CreateCantineDto } from './dto/create-cantine.dto';
import { UpdateCantineDto } from './dto/update-cantine.dto';

@Controller('cantine')
export class CantineController {
  constructor(private readonly cantineService: CantineService) {}

  @Post()
  create(@Body() createCantineDto: CreateCantineDto) {
    return this.cantineService.create(createCantineDto);
  }

  @Get()
  findAll() {
    return this.cantineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cantineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCantineDto: UpdateCantineDto) {
    return this.cantineService.update(id, updateCantineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cantineService.remove(id);
  }
}
