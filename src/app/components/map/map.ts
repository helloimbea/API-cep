import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class MapComponent {

  @Input() malhaUrl: string = '';

}
