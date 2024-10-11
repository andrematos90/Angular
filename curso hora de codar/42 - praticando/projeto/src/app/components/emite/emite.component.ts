import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emite',
  templateUrl: './emite.component.html',
  styleUrls: ['./emite.component.css']
})
export class EmiteComponent {

  @Output() evento = new EventEmitter<string>();

  emitirEvento(){
    this.evento.emit('emitiu');
  }

}
