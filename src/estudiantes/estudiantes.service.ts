import { Injectable } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class EstudiantesService {

  constructor(@InjectModel('Estudiantes') private readonly estudianteModel:Model<Estudiantes>){}

  async todos():Promise<Estudiantes[]> {
    return await this.estudianteModel.find();
  }
 
  async uno(id:string):Promise<Estudiantes> {
    return await this.estudianteModel.findOne({_id:id});
  }
 
  async crear(estudiante:Estudiantes):Promise<Estudiantes>{
    const nuevo= new this.estudianteModel(estudiante);
    return await nuevo.save();
  }



}
