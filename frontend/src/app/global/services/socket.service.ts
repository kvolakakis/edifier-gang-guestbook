import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {
  }

  receiveWelcome() {
    return this.socket.fromEvent('welcome');
  }

  receivePostsUpdated() {
    return this.socket.fromEvent('posts-updated');
  }

}
