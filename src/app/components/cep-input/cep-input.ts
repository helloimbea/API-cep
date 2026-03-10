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
export class CepInput implements AfterViewInit {

  cep: string = '';
  endereco?: CepInterface;
  malha: any;
  map: any;

  constructor(
    private cepService: CepService,
    private malhaService: MalhaService,
    private cdr: ChangeDetectorRef
  ) {}

  getCep() {

    this.cepService.buscarCep(this.cep).subscribe((dados) => {

      this.endereco = dados;
      const codigoIbge = dados.ibge;

      this.malhaService.buscarMalhaMunicipio(codigoIbge).subscribe((malha) => {

        this.malha = malha;

        L.geoJSON(malha as any).addTo(this.map);

        console.log(malha);

      });

    });

  }

  ngAfterViewInit() {

    this.map = L.map('map').setView([-15, -55], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

  }

}
