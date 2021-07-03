import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EstudiantesModule,MongooseModule.forRoot('mongodb://localhost:27017/estudiantes')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
