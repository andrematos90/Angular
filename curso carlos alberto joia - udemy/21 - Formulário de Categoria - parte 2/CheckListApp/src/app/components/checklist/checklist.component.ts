
import { Component } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { Category } from 'src/app/_models/category';
import { ChecklistItem } from 'src/app/_models/checklist_item';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

export const CHECKLIST_DATA = [
  {guid: 'aaa-bbb-ccc-ddd',
   completed: false,
   description: 'fazer exame',
   deadLine: Date.now(),
   postDate: Date.now(),
   category: CATEGORY_DATA.find(x =>x.name == 'Sáude')
  },

  {guid: 'aaa-bbb-ccc-ddd',
   completed: true,
   description: 'reuniao',
   deadLine: Date.now(),
   postDate: Date.now(),
   category: CATEGORY_DATA.find(x =>x.name == 'Trabalho')
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
    this.dialog.open(ChecklistComponent, {
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

  updateChecklistItem(element:ChecklistItem){
    console.log("atualizando item")
    this.dialog.open(ChecklistComponent, {
      disableClose:true, data : {updatableChecklistItem: element, actionName: 'Editar'}
    })
    .afterClosed()
    .subscribe(resp =>{
      console.log('fechando modal de edição')
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
