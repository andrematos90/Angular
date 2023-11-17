
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  animais : Animal[] = []

  constructor(private listService :ListService){
    this.getAnimais()
  }

  removeAnimal(animal:Animal){
    this.animais = this.animais.filter((a)=> animal.nome !== a.nome);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimais():void{
    this.listService.getAll().subscribe((animais) =>(this.animais = animais));
  }
}
