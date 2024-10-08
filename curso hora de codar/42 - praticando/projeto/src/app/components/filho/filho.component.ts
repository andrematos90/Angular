import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent {

  @Input() nomeDoCachorrao: string = ''; //declarando a variavel que vai receber o valor vazia
  @Input() detalhes!: { raca: string; idade: number };  //declarando a variavel e indicando com ! que ela vai receber um valor 
}
