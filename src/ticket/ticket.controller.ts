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
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { CheckAbility } from 'src/casl/policy.decorator';
import { Action } from 'src/casl/casl-ability.factory';
import { Ticket } from './entities/ticket.entity';
import { CaslGuard } from 'src/casl/casl.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @CheckAbility({ action: Action.Create, subject: Ticket })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @CheckAbility({ action: Action.Read, subject: Ticket })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @CheckAbility({ action: Action.Read, subject: Ticket })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }

  @CheckAbility({ action: Action.Update, subject: Ticket })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @CheckAbility({ action: Action.Delete, subject: Ticket })
  @UseGuards(AuthGuard('jwt'), CaslGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }
}
