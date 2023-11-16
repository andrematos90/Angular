
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private listService :ListService){
    this.getAnimais()
  }

  animais : Animal[] = []

  getAnimais():void{
    this.listService.getAll().subscribe((animais) =>(this.animais = animais));
  }
}
