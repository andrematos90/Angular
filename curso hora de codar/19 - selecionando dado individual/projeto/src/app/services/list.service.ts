import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animais'

  constructor(private http: HttpClient) {}

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }
  getItem(id:number):Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }


}
