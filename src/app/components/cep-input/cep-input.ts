import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep-input',
  imports: [FormsModule],
  templateUrl: './cep-input.html',
  styleUrl: './cep-input.css',
})
export class CepInput {

cep: string = '';

getCep() {
  console.log(this.cep);
}
}
