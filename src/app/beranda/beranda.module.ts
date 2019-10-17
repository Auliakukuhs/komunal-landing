import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BerandaRoutes } from './beranda.routes';
import { BerandaComponent } from './beranda.component';
import {ListProjectComponent} from "../list-project/list-project.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [BerandaComponent, ListProjectComponent],
  imports: [CommonModule, RouterModule.forChild(BerandaRoutes), TranslateModule]
})

export class BerandaModule {

}
