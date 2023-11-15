import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animais:Animal[], animal:Animal){
    console.log("service ativado, pela chamada na função 'removerAnimal'")
    return animais.filter((a) => animal.nome !== a.nome)
  }
}
