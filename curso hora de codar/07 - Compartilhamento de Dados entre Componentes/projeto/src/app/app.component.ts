import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variavelDoComponentePrincipal:string = 'valor da variável';

  nome:string = 'André Rosa de Matos'

  carro = {
    marca : "renault",
    modelo : "twingo",
    ano : 2001

  }
}
