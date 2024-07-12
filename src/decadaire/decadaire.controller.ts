import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Action } from 'src/casl/casl-ability.factory';
import { CaslGuard } from 'src/casl/casl.guard';
import { CheckAbility } from 'src/casl/policy.decorator';
import { DecadaireService } from './decadaire.service';
import { CreateDecadaireDto } from './dto/create-decadaire.dto';
import { UpdateDecadaireDto } from './dto/update-decadaire.dto';
import { Decadaire } from './entities/decadaire.entity';

@Controller('decadaire')
export class DecadaireController {
  constructor(private readonly decadaireService: DecadaireService) {}

  @CheckAbility({ action: Action.Create, subject: Decadaire })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Post()
  create(@Body() createDecadaireDto: CreateDecadaireDto) {
    return this.decadaireService.create(createDecadaireDto);
  }

  @CheckAbility({ action: Action.Read, subject: Decadaire })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get()
  findAll() {
    return this.decadaireService.findAll();
  }

  @CheckAbility({ action: Action.Read, subject: Decadaire })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('ouvert')
  findAllOpen() {
    return this.decadaireService.findAllOpen();
  }

  @CheckAbility({ action: Action.Read, subject: Decadaire })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decadaireService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDecadaireDto: UpdateDecadaireDto,
  ) {
    return this.decadaireService.update(id, updateDecadaireDto);
  }

  @CheckAbility({ action: Action.Delete, subject: Decadaire })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decadaireService.remove(id);
  }
}
