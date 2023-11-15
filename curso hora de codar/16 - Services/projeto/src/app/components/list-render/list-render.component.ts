import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService){

  }

  animais: Animal[] = [
    {especie : 'Cachorro', nome : 'Simba', idade: 3},
    {especie : 'Gato', nome : 'Gatao', idade:3},
    {especie : 'Cachorro', nome : 'Milu', idade: 8},
    {especie : 'Cachorro', nome : 'Luna', idade: 0},
    {especie : 'Cachorro', nome : 'Pretinha', idade: 6},
    {especie : 'Gato', nome : 'Dolly', idade: 3},
  ]

  removerAnimal(animal:Animal){
    console.log("função removerAnimal de 'list-render.component.ts chamada'");
    this.animais = this.listService.remove(this.animais, animal);

  }

}
