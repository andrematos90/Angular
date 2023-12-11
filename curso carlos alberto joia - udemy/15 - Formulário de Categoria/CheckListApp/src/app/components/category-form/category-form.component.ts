import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  public actionName = 'Editar';
  public categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.categoryForm = this.formBuilder.group({
      name:'André',
      age:'33',
      profession:'developer'

    })
  }


  cancel(){
    console.log("cancelou")
  }

  save(){
    console.log("salvou")
  }

}
