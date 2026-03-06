import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {

  private apiUrl = 'https://viacep.com.br/ws/{cep}/json/';

}
