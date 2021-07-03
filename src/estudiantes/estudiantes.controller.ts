import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly servicio: EstudiantesService) {}

  @Get()
  ObtenerTodos(): Promise<Estudiantes[]> {
    return this.servicio.todos();
  }

  @Post()
  crear(@Body() body: Estudiantes): Promise<Estudiantes> {
    return this.servicio.crear(body);
  }
}
