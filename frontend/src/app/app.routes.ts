import { Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { DefaultComponent } from './layouts/default/default.component';

export const routes: Routes = [
  { path: '',
  component: DefaultComponent,
  children: [{ path: '', component: ListaComponent}]
   },
 
];
