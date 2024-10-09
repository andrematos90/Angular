import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {

  size = 10;
  font = 'Helvetica'
  color = 'green';

  classe = ["blue-title", "big-title"]

}
