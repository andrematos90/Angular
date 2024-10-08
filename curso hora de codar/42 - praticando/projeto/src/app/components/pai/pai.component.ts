import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css'],
})
export class PaiComponent {
  nome: string = 'Simba Rough Collie';

  detalhes: {
    raca: string;
    idade: number;
  };

  constructor() {
    // Inicializando a propriedade dentro do construtor
    this.detalhes = {
      raca: 'Rough Collie',
      idade: 3,
    };
  }
}
