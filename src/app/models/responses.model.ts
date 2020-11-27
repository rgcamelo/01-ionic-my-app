import { Cultivo } from './cultivo.model';
import { Registro } from './registro.model';


export class ConsultarCultivoResponse {
    constructor(
      public readonly cultivos?: Cultivo[],
      public readonly cultivo?: Cultivo,
      public readonly message?: string,
    ) {}
  }

  export class ConsultarRegistroResponse {
    constructor(
      public readonly registros?: Registro[],
      public readonly registro?: Registro,
      public readonly message?: string,
    ) {}
  }

  export class DefaultResponse{
    constructor(public readonly message: string) {}
  }

  

