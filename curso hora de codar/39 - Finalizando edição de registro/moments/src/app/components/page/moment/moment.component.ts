
import { Moment } from 'src/app/Moment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';





@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit{
moment?: Moment;
baseApiUrl = environment.baseApiUrl;
faTimes = faTimes;
faEdit = faEdit;


constructor(
  private momentService: MomentService,
  private route: ActivatedRoute,
  private messageService: MessagesService,
  private router: Router){}

ngOnInit(): void {
    //id qe esta na url
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data)

}

async removeHandler(id:number){
  //chama o método no service para exluir e espera resposta da api voltar
  await this.momentService.removeMoment(id).subscribe()

  //mostra mensagem após
  this.messageService.add("Momento Excluido com sucesso!")

  //redireciona a págin após excluir
  this.router.navigate(['/'])
}

}
