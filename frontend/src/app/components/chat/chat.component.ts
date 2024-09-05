import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: {text: string, isUser: boolean}[] = [];
  userInput = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({text: this.userInput, isUser: true});
    this.chatService.sendMessage(this.userInput).subscribe(
      (response) => {
        this.messages.push({text: response.response, isUser: false});
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.userInput = '';
  }
}