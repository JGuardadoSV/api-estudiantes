import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosSchema } from './schemas/cursos.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Cursos',schema:CursosSchema}])],
  providers: [CursosService],
  controllers: [CursosController],
})

export class CursosModule {}
