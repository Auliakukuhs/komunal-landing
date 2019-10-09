import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PendanaanRoutes} from './pendanaan.routes';
import {PendanaanComponent} from './pendanaan.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PendanaanComponent],
  imports: [CommonModule, RouterModule.forChild(PendanaanRoutes), FontAwesomeModule]
})

export class PendanaanModule {

}
