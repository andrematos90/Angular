import { Output, ViewChild } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
Category
import { Category } from '../../_models/category';
import { ChecklistItem } from 'src/app/_models/checklist_item';
import { CATEGORY_DATA } from '../category/category.component';


@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public categories: Category[] = CATEGORY_DATA;

  public checklistForm!: FormGroup;

  @ViewChild(FormGroupDirective) public checklistFormGroupDirective!: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.checklistForm = this.formBuilder.group(
      {
        isCompleted: [this.checklistItem != null ?
          this.checklistItem.isCompleted : false, Validators.required],

        description: [this.checklistItem != null ?
          this.checklistItem.description : '', Validators.required],

        deadline: [this.checklistItem != null ?
          this.checklistItem.deadLine : new Date(), Validators.required],

        category: [this.checklistItem != null ?
            this.checklistItem.category : '', Validators.required],
      }
    )
}

  public clearForm(){
    this.checklistForm.reset();
  }

  public closeForm(){}

  public save(){
    this.formCloseEvent.emit(true);

  }

  public cancel(){
    this.formCloseEvent.emit(false);
  }


}
