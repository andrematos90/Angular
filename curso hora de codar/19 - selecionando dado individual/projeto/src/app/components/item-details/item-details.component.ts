import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../Animal';
import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  //?  significa que animal pode vir ou não
  animal? : Animal;

  constructor(private listService: ListService, private route:ActivatedRoute){
    //será executado quando o usuário entrar na rota
    this.getAnimal()
  }

  getAnimal(){
    //extrai o id e e converte para number
    const id = Number(this.route.snapshot.paramMap.get("id"));

    //acessa o dado no service
    this.listService.getItem(id).subscribe((animal) =>(this.animal = animal));

  }

}
