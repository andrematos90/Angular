import { Component } from '@angular/core';
import { Animal } from '../Animal';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService){
    this.getAnimais()
  }

  animais : Animal[] = []

  getAnimais():void{
    this.listService.getAll().subscribe((animais) =>(this.animais = animais));
  }

}
