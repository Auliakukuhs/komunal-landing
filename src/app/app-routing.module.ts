import {Routes} from '@angular/router';
import {BerandaComponent} from './beranda/beranda.component';
import {PendanaanComponent} from './pendanaan/pendanaan.component';

export const AppRoutes: Routes = [
    { path: '', component: BerandaComponent },
    { path: 'pendanaan', component: PendanaanComponent }
];
