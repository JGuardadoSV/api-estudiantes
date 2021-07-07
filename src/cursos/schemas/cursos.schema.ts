import * as mongoose from 'mongoose';

export const CursosSchema= new mongoose.Schema(
    {
    Nombre: {type: String, require:true},
    Maestro: {type: String, require:true}
});
