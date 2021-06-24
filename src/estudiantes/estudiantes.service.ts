import { Injectable } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';

@Injectable()
export class EstudiantesService {
  private baseDedatos: Estudiantes[] = [];

  todos(): Estudiantes[] {
    return this.baseDedatos;
  }

  crear(estudiante: Estudiantes): void {
    const max = this.baseDedatos.reduce(
      (op, item) => (op = op > item.Id ? op : item.Id),
      0,
    );

    console.log(max);
    estudiante.Id = max + 1;
    this.baseDedatos.push(estudiante);
  }
}
