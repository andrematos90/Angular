
import { Component } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { Category } from 'src/app/_models/category';
import { ChecklistItem } from 'src/app/_models/checklist_item';

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



  public createNewItem(){
    console.log("novo item criado")
  };

  public updateCompleteStatus(statusTrueOrFalse:boolean){
    console.log(`status alterado ${statusTrueOrFalse}`)
  }

  updateChecklistItem(element:ChecklistItem){
    console.log("atualizando item")
  }

  deleteChecklistItem(element:ChecklistItem){
    console.log("deletando item")
  }

}
