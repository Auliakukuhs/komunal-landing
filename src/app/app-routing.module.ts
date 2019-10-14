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
  },
  {
    path: 'faq',
    loadChildren: './faq/faq.module#FaqModule'
  },
  {
    path: 'profil',
    loadChildren: './profil/profil.module#ProfilModule'
  },
  {
    path: 'hubungikami',
    loadChildren: './hubungikami/hubungikami.module#HubungikamiModule'
  },
  {
    path: 'syarat',
    loadChildren: './syaratketentuan/syaratketentuan.module#SyaratketentuanModule'
  },
  {
    path: 'privasi',
    loadChildren: './privasi/privasi.module#PrivasiModule'
  }
];
