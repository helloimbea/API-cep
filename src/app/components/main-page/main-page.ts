import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CepInput } from '../cep-input/cep-input';
import { MalhaComponent } from '../malha/malha';

@Component({
  selector: 'app-main-page',
  imports: [CepInput,MalhaComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  malhaUrl: string = '';

  receberMapa(url: string) {
    this.malhaUrl = url;
  }

}
