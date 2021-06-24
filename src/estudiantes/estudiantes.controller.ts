import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('estudiantes')
export class EstudiantesController {
  @Get()
  ObtenerTodos() {
    return 'Listado de todos los estudiantes';
  }

  @Get(':id')
  ObtenerUno() {
    return 'Obtener un estudiante';
  }

  @Post()
  Crear() {
    return 'Crear estudiante';
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
