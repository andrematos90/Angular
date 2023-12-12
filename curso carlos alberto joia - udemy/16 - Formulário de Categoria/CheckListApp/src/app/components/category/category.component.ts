import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/_models/category';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Sáude', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-dddd'},

]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource:Category[] = CATEGORY_DATA;


  constructor(private dialog: MatDialog){}

  editCategory(inputCategory:Category){
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data : { editableCategory: inputCategory}})
      .afterClosed()
      .subscribe( resp => {
       if(resp) console.log('categoria apagada')
     }
   )
  }

  deleteCategory(category:Category){
    this.dialog.open(DialogComponent, {disableClose: true,
       data:{dialogMsg:'Você tem certeza que quer apagar a categoria?', leftButtonLabel:'não',
       rightButtonLabel:'sim'}})
       .afterClosed()
       .subscribe( resp => {
        if(resp) console.log('categoria apagada')
      }
    )
  }

  createNewCategory(){
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data : { actionName: 'Criar'}})
      .afterClosed()
      .subscribe( resp => {
       if(resp) console.log('Modal criar fechada')
     }
   )
  }
}
