import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //é página html
  styleUrls: ['./app.component.css'] // é o css
})
export class AppComponent {
  title = 'titulo do projeto';
  nome:string = "andre";

}
