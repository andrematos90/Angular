import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit{

  @Input() public actionName = 'Editar';
  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public editableCategory!: Category;
  public categoryForm!: FormGroup;
  public isFormReady:boolean = false;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name : '', Validators.required]
  });
  this.isFormReady = true;
}

  cancel(){
    console.log("cancelou")
    this.closeModelEventEmitter.emit(false);
  }

  save(){
    console.log("salvou")
    this.closeModelEventEmitter.emit(true);
  }

}
