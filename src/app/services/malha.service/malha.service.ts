import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MalhaService {

  getMalhaUrl(codigoIbge: string): string {
    return `https://servicodados.ibge.gov.br/api/v4/malhas/municipios/${codigoIbge}?formato=image/svg+xml`;
  }

}
