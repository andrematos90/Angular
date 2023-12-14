import { Component } from '@angular/core';
import { ChecklistItem } from 'src/app/_models/checklist_item';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent {

  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;

  public onFormClose($event: any){

  }
}
