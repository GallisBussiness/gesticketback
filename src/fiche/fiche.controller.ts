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
import { find, groupBy, keys} from 'lodash'; 
import { DecadaireService } from 'src/decadaire/decadaire.service';
import { addDays, compareAsc, getDate, parseISO } from 'date-fns';

@Controller('fiche')
export class FicheController {
  constructor(private readonly ficheService: FicheService, private readonly decadaireService: DecadaireService) {}

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

  // @CheckAbility({ action: Action.Read, subject: Fiche })
  // @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get('findfichebydecadaire/:id')
  async findAllFicheByDecadaire(@Param('id') id: string) {
    const decad = await this.decadaireService.findOne(id);
    const fiches = await this.ficheService.findAllFicheByDecadaire(id);
    const groupedByDate = groupBy(fiches, v => v.date);
    const groupedByTicket = groupBy(fiches, v => v.ticket.nom);
    const clesDate = keys(groupedByDate);
    let dic = {};
    const clesTicket = keys(groupedByTicket);

    clesDate.forEach(c => {
      dic[c] = groupBy(groupedByDate[c], v => v.ticket.nom);
      clesTicket.forEach(t => {
       dic[c][t] = dic[c][t] ? dic[c][t].reduce((acc,cur) => {
          acc.valeur = cur.ticket.valeur;
          acc.nombre += cur.nombre;
          acc.total += cur.nombre * cur.ticket.valeur;
          return acc;
        },{nombre:0,valeur:0,total:0}) : {nombre:0,valeur:0,total:0};
      }) 
    })
    return {clesDate,clesTicket,result: dic};
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
