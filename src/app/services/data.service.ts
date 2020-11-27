import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultarCultivoResponse, DefaultResponse, ConsultarRegistroResponse } from '../models/responses.model';
import { Observable } from 'rxjs';
import { Cultivo } from '../models/cultivo.model';
import { HandleHttpErrorService } from './@base/handle-http-error.service';
import {catchError} from 'rxjs/operators';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient,
    private handlerror: HandleHttpErrorService) { }


  getCultivos(): Observable<ConsultarCultivoResponse>{
    return this.http.get<ConsultarCultivoResponse>('http://localhost:3000/cultivo');
  }

  getCultivo(referencer:string): Observable<ConsultarCultivoResponse>{
    return this.http.get<ConsultarCultivoResponse>('http://localhost:3000/cultivo/'+referencer);
  }

  getRegistros(referencer:string): Observable<ConsultarRegistroResponse>{
    return this.http.get<ConsultarRegistroResponse>('http://localhost:3000/registro/'+referencer);
  }

  postCultivos(cultivo:Cultivo):Observable<DefaultResponse>{
    return this.http.post<DefaultResponse>('http://localhost:3000/cultivo',cultivo).pipe(
      catchError(this.handlerror.handleError<DefaultResponse>('Registrar cultivo',null))
    );;
  }

  postRegistros(registro:Registro):Observable<DefaultResponse>{
    return this.http.post<DefaultResponse>('http://localhost:3000/registro',registro).pipe(
      catchError(this.handlerror.handleError<DefaultResponse>('Registrar registro',null))
    );;
  }

}

