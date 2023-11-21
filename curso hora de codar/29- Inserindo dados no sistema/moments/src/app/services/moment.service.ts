
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseAPiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseAPiUrl}api/moments`

  constructor(private http:HttpClient){}

  createMoment(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);

  }
}

