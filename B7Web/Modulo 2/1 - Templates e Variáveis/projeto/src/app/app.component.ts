import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  //primeira maneira de fazer o html
   `<h1> prieira maneira de fazer o html</h1>`,

  //segunda maneira de fazer o html
  templateUrl: './app.component.html'
  
  
})
export class AppComponent {
  title = 'exemplo de variável';
  nome = 'andré';
  idade = '33';
  nomes = ['andre', 'simba', 'collie', 'bin'];
  ultimoNome = this.nomes[3];
}
