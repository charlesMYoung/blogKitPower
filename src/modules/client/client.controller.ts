import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  BatchDeleteDTO,
  ClientRegisterDTO,
  UpdateAllClientDTO,
} from './client.dto';
import { AuthGuard } from '~/guard/auth.guard';
import { ClientService } from './client.service';
import { Message, Pagination } from '@ddboot/core';
import { QueryParam } from '~/models/queryParam.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @Message('register client success')
  @UseGuards(AuthGuard)
  register(@Body() client: ClientRegisterDTO) {
    return this.clientService.register(client);
  }

  @Put()
  @Message('update client success')
  @UseGuards(AuthGuard)
  update(@Body() client: UpdateAllClientDTO) {
    return this.clientService.update(client);
  }

  @Message('get client list success')
  @Pagination()
  @UseGuards(AuthGuard)
  @Get()
  listPost(
    @Query() queryParam: QueryParam,
    @Query('title') postTitle: string,
    @Query('id') id: string,
  ) {
    return this.clientService.list(queryParam, postTitle, id);
  }

  @Delete()
  @UseGuards(AuthGuard)
  @Message('delete client success')
  del(@Body() delId: BatchDeleteDTO) {
    return this.clientService.del(delId);
  }
}