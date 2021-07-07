import * as mongoose from 'mongoose';

export const EstudianteSchema= new mongoose.Schema(
    {
    Nombre: {type: String, require:true},
    Direccion: {type: String, require:true},
    Telefono: {type: String, require:true},
    CursosAprobados:[{ type: mongoose.Types.ObjectId }] // array de cursos aprobados
}
,{
    versionKey: false, // sin version
    timestamps: true   // fecha de registro y actualizacion automatica
}
);
