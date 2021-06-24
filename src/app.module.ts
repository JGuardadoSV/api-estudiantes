import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
  imports: [EstudiantesModule],
  controllers: [AppController, EstudiantesController],
  providers: [AppService, EstudiantesService],
})
export class AppModule {}
