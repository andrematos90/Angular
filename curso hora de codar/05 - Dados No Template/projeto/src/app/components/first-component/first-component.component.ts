import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name:string = 'André Rosa de Matos';
  age:number = 33;

  hobbies:string[] = ['ciclismo', 'viagens', 'comer'];

  firstCar:{
    model:string,
    brand:string,
    year:number,
    imported:boolean}
    =
  {
    model : 'Gol',
    brand : 'Volkswagen',
    year : 2008,
    imported: false
  }

  allCars:{car:string, year:number, imported:boolean}[]=[
    {car: 'Gol', year: 2008, imported: false},
    {car:'New Civic', year: 2008, imported:false},
    {car: 'Malibu', year: 2010, imported: true},
    {car: 'Twingo', year: 2001, imported: true},
    {car: 'Fusca', year: 1985, imported:false},

  ]


}
