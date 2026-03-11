import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
  endereco!: CepInterface;

  @Output() mapaGerado = new EventEmitter<string>();

  constructor(private cepService: CepService, private cdr: ChangeDetectorRef) {}

  getCep() {

    this.cepService.buscarCep(this.cep).subscribe((dados) => {

      this.endereco = dados;

      const codigoIbge = dados.ibge;

      const malhaUrl =
        `https://servicodados.ibge.gov.br/api/v4/malhas/municipios/${codigoIbge}?formato=image/svg+xml`;

      this.mapaGerado.emit(malhaUrl);

    });
  }
}

