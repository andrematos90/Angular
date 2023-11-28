import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() variavel:string = '';

  @Input() nome!:string;
  @Input() carro! :{ marca:String, modelo:String, ano:Number}

}

/* as variaveis podem ser inicializadas vazias como em "@Input() variavel:string = ''"  ou pode ser usar "!" para indicar que a variável tem um valor que esta vindo do componente pai como em "@Input() nome!:string; e   @Input() carro! :{ marca:String, modelo:String, ano:Number} e será iniciado"

*/
