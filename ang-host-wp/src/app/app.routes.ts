import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'ang-mfe2',
      exposedModule: './Component'
    }).then(m => m.AppComponent)
  },
  {
    path: 'next',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
      remoteName: 'remote',
      exposedModule: './Home',
      elementName: 'http-mfe-react-element',
    } as WebComponentWrapperOptions,
  },
];
