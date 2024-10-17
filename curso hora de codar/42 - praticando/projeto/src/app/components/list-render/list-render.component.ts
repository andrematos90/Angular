import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {


  animals : Animal[] =[
    {name: "turca", type: "dog", age: 1},
    {name: "tom", type: "cat", age: 23},
    {name: "frida", type: "cat", age: 5},
    {name: "bob", type: "dog", age: 30}
  ]

  details:string = '';

  showDetails(animal:Animal):void{
    
    this.details = `${animal.name} tem ${animal.age} anos!`
  }

}
