import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly servicio: EstudiantesService) {}

  @Get()
  ObtenerTodos(): Estudiantes[] {
    return this.servicio.todos();
  }

  @Get(':id')
  ObtenerUno() {
    return 'Obtener un estudiante';
  }

  @Post()
  Crear(@Body() body: Estudiantes) {
    return this.servicio.crear(body);
  }

  @Put(':id')
  ActualizarUno() {
    return 'Actualizar estudiante';
  }

  @Delete(':id')
  EliminarUno() {
    return 'Eliminar estudiante';
  }
}
