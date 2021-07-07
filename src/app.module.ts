import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosService } from './cursos/cursos.service';
import { CursosController } from './cursos/cursos.controller';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [EstudiantesModule,CursosModule,MongooseModule.forRoot('mongodb+srv://admin:HolaMundo123456@cluster0.ml90l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
