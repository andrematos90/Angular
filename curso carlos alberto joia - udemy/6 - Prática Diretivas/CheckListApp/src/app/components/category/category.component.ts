import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public elemento:string = "ClasseB"
  public show:boolean= true;

  public carros= [
    {marca:'renault', modelo:'twingo'},
    {marca:'chevrolet', modelo:'malibu'},
    {marca:'renault', modelo:'clio'},
    {marca:'volkswagen', modelo:'fusca'},
  ]


}
