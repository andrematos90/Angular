
import { Component } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';

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
  public displayedColumns: string[] =  ['id', 'category', 'description', 'postDate', 'deadLine', 'actions'];


  public createNewItem(){
    console.log("novo item criado")
  };




}
