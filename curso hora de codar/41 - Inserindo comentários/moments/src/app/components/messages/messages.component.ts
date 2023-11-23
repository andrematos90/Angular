import { Component, OnDestroy } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';
MessagesService

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnDestroy {
  faTimes = faTimes;
  message: string = '';
  private subscription: Subscription;

  constructor(public messagesService: MessagesService) {
    this.subscription = this.messagesService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearMessage() {
    this.messagesService.clear();
  }
}
