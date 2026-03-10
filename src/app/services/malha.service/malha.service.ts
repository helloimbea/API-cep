import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MalhaService {

  constructor(private http: HttpClient) {}

  buscarMalhaMunicipio(ibge: string) {
    const url = `https://servicodados.ibge.gov.br/api/v4/malhas/municipios/${ibge}?formato=application/vnd.geo+json`;
    return this.http.get(url);
  }

}
