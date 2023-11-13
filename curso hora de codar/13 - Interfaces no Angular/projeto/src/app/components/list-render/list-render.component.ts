import { Animal } from './../../Animal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animalDetails: string = '';

  animais: Animal[] =[
    {nome: 'Simba', raca: 'Rough collie', idade: 3},
    {nome: 'Milu', raca: 'Vira lata', idade: 7},
    {nome: 'Gatao', raca: 'gato', idade: 3},
    {nome: 'luna', raca: 'Pastor', idade: 0 }
  ]

  showDetails(animal:Animal):void{
    this.animalDetails = `${animal.nome} tem ${animal.idade} anos de idade e é da raça ${animal.raca}`
  }

}
