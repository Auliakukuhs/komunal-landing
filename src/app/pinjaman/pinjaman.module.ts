import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PinjamanRoute} from './pinjaman.routes';
import {PinjamanComponent} from './pinjaman.component';

@NgModule({
  declarations: [PinjamanComponent],
  imports: [CommonModule, RouterModule.forChild(PinjamanRoute)]
})

export class PinjamanModule {

}
