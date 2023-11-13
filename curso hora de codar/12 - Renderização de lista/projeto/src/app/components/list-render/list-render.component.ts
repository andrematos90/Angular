import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animais =[
    {nome: "Simba", raca:"collie"},
    {nome: "Gatão", raca: "gato"},
    {nome: "Milu", raca: "vira-lata"}
  ]

}
