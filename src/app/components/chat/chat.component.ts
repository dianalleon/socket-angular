import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('chatmensajes') elemento! :  ElementRef;

  texto = '';
  mensajesSubscription!: Subscription;

  mensajes: any[] = [];

  constructor(public chatService: ChatService){

  }

  ngOnInit() {
    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {
      this.mensajes.push(msg)
      setTimeout( () => {
        this.elemento.nativeElement.scrollTop = this.elemento.nativeElement.scrollHeight;
      }, 50)
    });
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar(){
    if( this.texto.trim().length === 0){
      return;
    }

    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
