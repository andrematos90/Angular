import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  color = 'yellow';
  font = 'Arial'
  size = '60px'

  classes = ['green-title', 'small-title'];
  underline = 'underline-title'

}
