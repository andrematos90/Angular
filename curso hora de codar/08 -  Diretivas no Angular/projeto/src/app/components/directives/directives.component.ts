import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  //propriedades que serão usadas no template
  color = 'yellow';
  font = 'Arial'
  size = '60px'

  //propriedade uma lista de classes que serão definidas no arquuivo .css
  classes = ['green-title', 'small-title'];

  //propriedade com uma classe só
  underline = 'underline-title'

}
