import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // FAZ COM QUE A REQUISIÇÃO OCORRA
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  // DECLARAR URL DA API (NORMALMENTE É PEGO DE UM ARQUIVO DE CONFIGURAÇÃO)
  private apiUrl = 'http://localhost:3000/animais'

  constructor(private http: HttpClient) {}


  //getAll FAZ A REQUISIÇÃO HTTP
  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }
}

/*PREENCHE A LISTA DE ANIMAIS ,
É PASSADO COMO PARAMETRO UMA LISTA DE ANIMAIS <Animal[]>
Observable VERIFICA SE ACONTECE DE MANEIRA CORRETA
"http: HttpClient" É PASSADO COMO PARAMETRO PARA O CONSTRUTOR PARA QUE SE POSSA TER ACESSO AO MÉTODO "get"
COMO É UM EVENTO DE OBSERVAÇÃO É NECESSÁRIO PASSAR UM GENERIC DE ANIMAL ARRAY
ELE FICA OBSERVANDO SE O ARRAY DE ANIMAIS CHEGA OU NAO DA REQUISIÇÃO*/
