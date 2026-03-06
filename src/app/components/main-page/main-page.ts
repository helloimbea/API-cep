import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CepInput } from '../cep-input/cep-input';

@Component({
  selector: 'app-main-page',
  imports: [CepInput],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
