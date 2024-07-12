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
import { groupBy, keys} from 'lodash'; 



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
  @Get('')
  findAll() {
    return this.ficheService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findfichebydecadaire/:id')
  async findAllFicheByDecadaire(@Param('id') id: string) {
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
