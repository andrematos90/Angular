import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
})
export class AppComponent {
  title = 'como usar o ngFor';

  carros = [
    {modelo: 'Twingo', ano: 2001},
    {modelo: 'Malibu', ano: 2010},
    {modelo: 'New Civic', ano: 2008},
    {modelo: 'Fusca', ano: 1985},
    {modelo: 'Gol', ano: 2008}
  ];

}
