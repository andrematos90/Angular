import { Component } from '@angular/core';

@Component({
  selector: 'app-executa-evento',
  templateUrl: './executa-evento.component.html',
  styleUrls: ['./executa-evento.component.css']
})
export class ExecutaEventoComponent {

  trataEvento(dados:string){
    console.log(dados)
  }

}
