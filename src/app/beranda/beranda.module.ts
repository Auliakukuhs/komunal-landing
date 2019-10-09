import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BerandaRoutes } from './beranda.routes';
import { BerandaComponent } from './beranda.component';

@NgModule({
  declarations: [BerandaComponent],
  imports: [CommonModule, RouterModule.forChild(BerandaRoutes)]
})

export class BerandaModule {

}
