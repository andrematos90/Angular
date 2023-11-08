import { Component } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  templateUrl: './fist-component.component.html',
  styleUrls: ['./fist-component.component.css']
})
export class FistComponentComponent {

  name:string = "André Rosa de Matos"

  carros=['Twingo', 'Fusca', 'Civic']

  cachoro = {
    nome : 'Simba',
    raca : 'Rough Collie'
  }

}
