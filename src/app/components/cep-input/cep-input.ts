import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../services/cep.service/cep.service';
import { CepInterface } from '../../interfaces/cep.interface';

@Component({
  selector: 'app-cep-input',
  imports: [FormsModule],
  templateUrl: './cep-input.html',
  styleUrl: './cep-input.css',
})
export class CepInput {

  cep: string = '';
  endereco?: CepInterface;

  constructor(private cepService: CepService) {}

  getCep() {

    this.cepService.buscarCep(this.cep).subscribe((dados) => {
      this.endereco = dados;
      console.log(dados);
    });

  }

}
