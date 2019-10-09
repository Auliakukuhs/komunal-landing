import { Routes } from '@angular/router';
import { BerandaComponent } from './beranda.component';

export const BerandaRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'beranda-component'
  },
  {
    path: '',
    component: BerandaComponent
  }
];
