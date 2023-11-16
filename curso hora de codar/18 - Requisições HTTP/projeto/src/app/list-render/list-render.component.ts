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

  animais : Animal[] = [] //começa com um array vazio

  //"getAnimais" ACESSA O MÉTODO DO SERVICE
  getAnimais():void{
    this.listService.getAll().subscribe((animais) =>(this.animais = animais));
  }

}

/*PARA SE PREENCHER O ARRAY:
SUBSCRIBE DIZ QUE O EVENTO VAI SER CONCRETIZADO

subscribe((animais) =>(this.animais = animais));
COMO ESTOU OBSERVANDO NO SERVICE UM ARRAY DE ANIMAIS , É O QUE VAI SER RETORNADO DESSE OBSERVABLE, EM subscribe((animais) ESTOU CHAMANDO ELE, E NA FUNÇÃO   =>(this.animais = animais)); É FEITA A ATRIBUIÇÃO A PROPRIEDADE

*/

