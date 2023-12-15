import { Output, ViewChild } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
Category
import { Category } from '../../_models/category';
import { ChecklistItem } from 'src/app/_models/checklist_item';



@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public checklisItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public categories: Category[] = [];

  public checklistForm!: FormGroup;

  @ViewChild(FormGroupDirective) public checklistFormDirective!: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklisItem != null ?
          this.checklisItem.completed : false, Validators.required],

        description: [this.checklisItem != null ?
          this.checklisItem.description : '', Validators.required],

        deadline: [this.checklisItem != null ?
          this.checklisItem.deadLine : new Date(), Validators.required],

        category: [this.checklisItem != null ?
            this.checklisItem.category : '', Validators.required],
      }
    )
}



  public clearForm(){
    this.checklistForm.reset();
  }

  public save(){

  }

  public cancel(){

  }
}
