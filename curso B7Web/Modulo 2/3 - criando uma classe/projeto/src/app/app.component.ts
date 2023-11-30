import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

  title = 'como criar uma classe ';
  nomes = [
    new Pessoa(1, 'André', 33),
    new Pessoa(2, "Fulana", 24),
    new Pessoa(3, "Beltrana", 25),
    new Pessoa(4, "Jubilei", 3)
  ]
}
