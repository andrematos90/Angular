import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variavelDoComponentePrincipal:string = 'valor da variável';

  carro = {
    marca : "renault",
    modelo : "twingo",
    ano : 2001

  }
}
