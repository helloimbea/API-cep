import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../services/cep.service/cep.service';
import { CepInterface } from '../../interfaces/cep.interface';
import { MalhaService } from '../../services/malha.service/malha.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-cep-input',
  imports: [FormsModule],
  templateUrl: './cep-input.html',
  styleUrl: './cep-input.css',
})
export class CepInput {

  cep: string = '';
  endereco: any;
  malhaUrl: string = '';

  constructor(
    private cepService: CepService,
    private malhaService: MalhaService,
    private cdr: ChangeDetectorRef
  ) {}

  getCep() {

    this.cepService.buscarCep(this.cep).subscribe((dados) => {

      this.endereco = dados;

      const codigoIbge = dados.ibge;

      this.malhaUrl =
        `https://servicodados.ibge.gov.br/api/v4/malhas/municipios/${codigoIbge}?formato=image/svg+xml`;
  this.cdr.detectChanges();
    });

  }


}
