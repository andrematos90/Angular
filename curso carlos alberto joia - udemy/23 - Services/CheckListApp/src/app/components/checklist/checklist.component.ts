
import { Component } from '@angular/core';

import { Category } from 'src/app/_models/category';
import { ChecklistItem } from 'src/app/_models/checklist_item';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';


export const CHECKLIST_DATA = [
  {guid: 'aaa-bbb-ccc-ddd',
   completed: false,
   description: 'fazer exame',
   deadLine: Date.now(),
   postDate: Date.now(),
   category: null
  },

  {guid: 'aaa-bbb-ccc-ddd',
   completed: true,
   description: 'reuniao',
   deadLine: Date.now(),
   postDate: Date.now(),
   category: null
  }
];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {

  public dataSource = CHECKLIST_DATA;
  public displayedColumns: string[] =  ['id', 'category', 'description', 'postDate', 'deadLine', 'completed', 'actions'];


  constructor(private dialog: MatDialog){}


  public createNewItem(){
    console.log("novo item criado")
    this.dialog.open(ChecklistEditComponent, {
      disableClose:true, data : { actionName: 'Criar'}
    })
    .afterClosed()
    .subscribe(resp =>{
      console.log('fechando modal de criação')
    });
  };

  public updateCompleteStatus(statusTrueOrFalse:boolean){
    console.log(`status alterado ${statusTrueOrFalse}`)
  }

  updateChecklistItem(checklistItem:ChecklistItem){
    console.log("atualizando item")
    this.dialog.open(ChecklistEditComponent, {
      disableClose:true, data : {updatableChecklistItem: checklistItem, actionName: 'Editar'}
    })
    .afterClosed()
    .subscribe(resp =>{
      console.log('fechando modal de edição');

    });
  }

  deleteChecklistItem(element:ChecklistItem){
    console.log("deletando item")
    this.dialog.open(
      DialogComponent,
      {disableClose:true,
      data: {msg:'Desela realmente apagar o item?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'OK'}
    })
    .afterClosed()
    .subscribe(resp => {
      console.log('modal fechado')
    });
  }

}
