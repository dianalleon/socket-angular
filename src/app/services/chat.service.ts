import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private wsService: WebsocketService
  ) { }

  sendMessage(message: string){
    const payload = {
      de: 'Fernando',
      cuerpo: message
    };

    this.wsService.emit('mensaje', payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }
}
