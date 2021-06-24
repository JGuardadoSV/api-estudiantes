import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
@Module({
  providers: [EstudiantesService],
  controllers: [EstudiantesController],
})
export class EstudiantesModule {}
