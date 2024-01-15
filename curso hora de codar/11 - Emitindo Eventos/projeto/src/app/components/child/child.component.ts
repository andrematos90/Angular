import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //envia o evento
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  //emite o evento
  handleClick(){
    this.changeNumber.emit()
  }

}
