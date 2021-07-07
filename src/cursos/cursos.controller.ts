import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Cursos } from './cursos.interface';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {

    constructor(private readonly servicio: CursosService) {}
    @Post()
  crear(@Body() body: Cursos): Promise<Cursos> {
    return this.servicio.crear(body);
  }


}
