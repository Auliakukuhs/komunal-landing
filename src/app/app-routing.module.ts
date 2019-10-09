import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'beranda'
    },
    {
      path: '',
      loadChildren: './beranda/beranda.module#BerandaModule'
    },
    {
      path: 'pendanaan',
      loadChildren: './pendanaan/pendanaan.module#PendanaanModule'
    },
    {
      path: 'pinjaman',
      loadChildren: './pinjaman/pinjaman.module#PinjamanModule'
    }
];
