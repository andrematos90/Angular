import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  handleClick(){
    this.changeNumber.emit()
  }

}
