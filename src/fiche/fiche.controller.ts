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
import { FicheService } from './fiche.service';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';
import { CheckAbility } from 'src/casl/policy.decorator';
import { Action } from 'src/casl/casl-ability.factory';
import { Fiche } from './entities/fiche.entity';
import { CaslGuard } from 'src/casl/casl.guard';
import { AuthGuard } from '@nestjs/passport';
import { USER_ROLE } from 'src/user/entities/user.entity';

@Controller('fiche')
export class FicheController {
  constructor(private readonly ficheService: FicheService) {}

  @CheckAbility({ action: Action.Create, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Post()
  create(@Body() createFicheDto: CreateFicheDto) {
    return this.ficheService.create(createFicheDto);
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('byrole/:role/:id')
  findAll(@Param('role') role: string, @Param('id') id: string) {
    if (role === USER_ROLE.ADMIN) {
      return this.ficheService.findAll();
    }
    return this.ficheService.findAllByUser(id);
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('findfichebydecadaire/:id')
  findAllFicheByDecadaire(@Param('id') id: string) {
    return this.ficheService.findAllFicheByDecadaire(id);
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('findfichebyticket/:id')
  findAllFicheByTicket(@Param('id') id: string) {
    return this.ficheService.findAllFicheByTicket(id);
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('findfichebyuser/:id')
  findAllFicheByUser(@Param('id') id: string) {
    return this.ficheService.findAllFicheByUser(id);
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('findfichebydecadaireandticket/:iddecadaire/:idticket')
  findAllFicheByDecadaireAndTicket(
    @Param('iddecadaire') iddecadaire: string,
    @Param('idticket') idticket: string,
  ) {
    return this.ficheService.findAllFicheByDecadaireAndTicket({
      ticket: idticket,
      decadaire: iddecadaire,
    });
  }

  @CheckAbility({ action: Action.Read, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheService.findOne(id);
  }

  @CheckAbility({ action: Action.Update, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicheDto: UpdateFicheDto) {
    return this.ficheService.update(id, updateFicheDto);
  }

  @CheckAbility({ action: Action.Delete, subject: Fiche })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheService.remove(id);
  }
}
