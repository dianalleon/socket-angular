import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { enviroment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: enviroment.wsUrl, options: {}
};


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
