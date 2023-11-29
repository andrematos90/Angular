import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  myNumber: number = 0

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10)
  }

}
