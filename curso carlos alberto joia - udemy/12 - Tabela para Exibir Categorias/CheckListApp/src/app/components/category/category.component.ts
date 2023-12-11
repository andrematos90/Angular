import { Component } from '@angular/core';
import { Category } from 'src/app/_models/category';

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


  addCategory(category:Category){

  }

  deleteCategory(category:Category){

  }

  createNewCategory(){}


}
