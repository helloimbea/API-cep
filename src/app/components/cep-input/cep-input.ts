import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../services/cep.service/cep.service';
import { CepInterface } from '../../interfaces/cep.interface';
import { MalhaService } from '../../services/malha.service/malha.service';

@Component({
  selector: 'app-cep-input',
  imports: [FormsModule],
  templateUrl: './cep-input.html',
  styleUrl: './cep-input.css',
})
export class CepInput {

  cep: string = '';
  endereco!: CepInterface;
  erro: string = '';
  loading: boolean = false;

  @Output() mapaGerado = new EventEmitter<string>();

  constructor(private cepService: CepService, private cdr: ChangeDetectorRef, private malhaService: MalhaService) {}

  getCep() {

    this.erro = '';

    this.cepService.buscarCep(this.cep).subscribe({

      next: (dados) => {
        this.loading = false;

        if (!dados || !dados.ibge) {
          this.erro = "CEP não encontrado.";
          this.cdr.detectChanges();
          return;
        }

        this.endereco = dados;

        const malhaUrl = this.malhaService.getMalhaUrl(dados.ibge);

        this.mapaGerado.emit(malhaUrl);
        this.cdr.detectChanges();
      },

      error: () => {
         this.loading = false;
        this.erro = "Erro ao buscar o CEP.";
        this.cdr.detectChanges();
      }

    });

  }
}

