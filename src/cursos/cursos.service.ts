import { Injectable } from '@nestjs/common';
import { Cursos } from './cursos.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class CursosService {

  constructor(@InjectModel('Cursos') private readonly cursoModel:Model<Cursos>){}

 
  async crear(curso:Cursos):Promise<Cursos>{
    const nuevo= new this.cursoModel(curso);
    return await nuevo.save();
  }





}