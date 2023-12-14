import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChecklistItem } from 'src/app/_models/checklist_item';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit{
  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  public checklistForm!:FormGroup;

  constructor(private formBuilder: FormBuilder){}

  public ngOnInit(): void {
      this.checklistForm = this.formBuilder.group(
        {
          completed: [this.checklistItem != null ?
            this.checklistItem.completed : false, Validators.required],

          description: [this.checklistItem != null ?
            this.checklistItem.description : '', Validators.required],

          deadline: [this.checklistItem != null ?
            this.checklistItem.deadLine : new Date(), Validators.required],

          category: [this.checklistItem != null ?
              this.checklistItem.category : '', Validators.required],
        }
      )
  }


  public closeForm(){

  }
}
