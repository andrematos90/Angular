import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
   nome:string = "André Rosa de Matos"

   idade:number = 33

   carro = {
    marca: "Renault",
    ano: 2001,
    modelo: "Twingo"
   }

   hobbies = ["pedalar", "caminhar", "viajar"]

}
