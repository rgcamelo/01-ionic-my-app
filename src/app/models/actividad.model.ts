import { Cultivo } from './cultivo.model';
export class Actividad {
    public reference: string;
    public cultivo: Cultivo;
    public creference: string;
    public fecha: Date;
    public tipo: string;
    public nota: string;
}