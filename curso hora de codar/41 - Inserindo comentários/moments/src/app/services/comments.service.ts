import { http } from './../../../../../22 - Setup da API/curso_adonis_api_yt-main/config/app';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../Comments';
import { Response } from '../Response';



@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments/comments`

  constructor(private http:HttpClient) { }

  createComment(data:Comment): Observable<Response<Comment>>{
    return this.http.post<Response<Comment>>(this.apiUrl, data)
  }
}
