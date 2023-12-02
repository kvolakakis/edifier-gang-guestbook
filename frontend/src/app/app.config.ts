import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
const configSocketIo: SocketIoConfig = {
  url: `${environment.host}`,
  options: {
    transports: ['websocket']
  }
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withJsonpSupport()), importProvidersFrom(SocketIoModule.forRoot(configSocketIo))]
};
