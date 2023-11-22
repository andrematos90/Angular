import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';




@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private messageService:MessagesService,
    private router: Router){}


  /*será um método assincrono pq terá interação com a API e esperará "algo" */
  async createHandler(moment: Moment){
   /*transforma fomulário angular em form data, para ser enviado para API, poderia ser um json,
  mas no caso será FormData*/

   const formData = new FormData

   formData.append('title', moment.title);
   formData.append('description', moment.description);

   if(moment.image){
    formData.append('image', moment.image);
   }

   //todo
   await this.momentService.createMoment(formData).subscribe();

   //enviar para o service


   //exibir msg
   this.messageService.add('Momento adicionado com sucesso!');

   //redirect, redireciona a página para home depois de adicionar momento
   this.router.navigate([''])
  }

}
