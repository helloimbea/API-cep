import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-malha',
  imports: [],
  templateUrl: './malha.html',
  styleUrl: './malha.css',
})
export class MalhaComponent {

  @Input() malhaUrl: string = '';

}
