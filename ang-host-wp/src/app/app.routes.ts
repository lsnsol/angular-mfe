import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'next',
  //   loadChildren: () => loadRemoteModule({
  //     remoteEntry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
  //     remoteName: 'nextmnh',
  //     exposedModule: './Home'
  //   }).then(m => m.Home)
  // },
  {
    path: 'next',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
      remoteName: 'nextmnh',
      exposedModule: './Home',
      elementName: 'http-mfe-react-element',
    } as WebComponentWrapperOptions,
  },
];
