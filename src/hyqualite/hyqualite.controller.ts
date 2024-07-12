import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HyqualiteService } from './hyqualite.service';
import { CreateHyqualiteDto } from './dto/create-hyqualite.dto';
import { UpdateHyqualiteDto } from './dto/update-hyqualite.dto';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard('jwt'))
@Controller('hyqualite')
export class HyqualiteController {
  constructor(private readonly hyqualiteService: HyqualiteService) {}

  @Post()
  create(@Body() createHyqualiteDto: CreateHyqualiteDto) {
    return this.hyqualiteService.create(createHyqualiteDto);
  }

  @Get()
  findAll() {
    return this.hyqualiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hyqualiteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHyqualiteDto: UpdateHyqualiteDto) {
    return this.hyqualiteService.update(id, updateHyqualiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hyqualiteService.remove(id);
  }
}
