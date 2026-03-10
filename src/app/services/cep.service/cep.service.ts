import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CepInterface } from '../../interfaces/cep.interface';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {}

  buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<CepInterface>(url);
  }

}
