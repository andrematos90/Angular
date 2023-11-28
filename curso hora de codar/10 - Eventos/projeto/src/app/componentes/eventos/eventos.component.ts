import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
show:boolean = false;

showMessage():void {
  this.show = !this.show; /* "!" faz com que sempre que clicado a variável tenha seu valor invertido, isso chama-se "toggle" e evita a necessidade de criar outro método para voltar o valor da váriavel novamente*/

}

}
