import { Moment } from 'src/app/Moment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/Comment';

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

commentForm!: FormGroup;

constructor(
  private momentService : MomentService,
  private route : ActivatedRoute,
  private messageService : MessagesService,
  private router : Router,
  private commentService : CommentsService){}

ngOnInit(): void {
    //id qe esta na url
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data)

    this.commentForm = new FormGroup({
      text: new FormControl('',[Validators.required]),
      username: new FormControl('', [Validators.required]),
    })


}

get text(){
  return this.commentForm.get('text')!;
}

get username(){
  return this.commentForm.get('username')!;
}


async removeHandler(id:number){
  //chama o método no service para exluir e espera resposta da api voltar
  await this.momentService.removeMoment(id).subscribe()

  //mostra mensagem após
  this.messageService.add("Momento Excluido com sucesso!")

  //redireciona a págin após excluir
  this.router.navigate(['/'])
}

async OnSubmit(formDirective: FormGroupDirective){
  if(this.commentForm.invalid){
    console.log('if paçocaum')
    return
  }
  
    console.log("paçocaum")
    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id)
  
    await this.commentService
    .createComment(data)
    .subscribe((comment) => this.moment!.comments!.push(comment.data));
  
    //apresenta mensagem na tela
    this.messageService.add("Comentário adicionado!")
  
    //limpa o formulário (front-end)
    this.commentForm.reset();
  
    //limpa o formulário (back-end)
    formDirective.resetForm();
  

}

}
