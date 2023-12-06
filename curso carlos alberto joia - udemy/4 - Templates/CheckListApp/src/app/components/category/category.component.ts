import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  public texto:string = 'Olá Mundo!'
  public isDisabled:boolean = false;
  public myBindingProperty:string = '';

  public clicado(a:string):void{
    console.log(a)
    console.log("ciclou!")
  }

  public disableButton(){
    if(this.isDisabled){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }

}
