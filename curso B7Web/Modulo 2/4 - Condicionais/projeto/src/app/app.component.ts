import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'projeto';
  nomes = [
    {nome: 'simba', especie: 'cachorrudo'},
    {nome: 'milu', especie: 'cachorra'},
    {nome: 'luna', especie: 'cadela'}
  ]

  mostraMsg:boolean = true;
  msg = "Olá mundo!"
}
