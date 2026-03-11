import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CepInput } from '../cep-input/cep-input';
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-main-page',
  imports: [CepInput,MapComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  malhaUrl: string = '';

  receberMapa(url: string) {
    this.malhaUrl = url;
  }

}
