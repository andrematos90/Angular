import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  constructor() {}

  add(message: string) {
    this.messageSource.next(message);

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.messageSource.next('');
  }
}
