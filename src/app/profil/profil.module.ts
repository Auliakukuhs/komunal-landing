import {NgModule} from "@angular/core";
import {ProfilComponent} from "./profil.component";
import {RouterModule} from "@angular/router";
import {ProfilRoutes} from "./profil.routes";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ProfilComponent],
  imports: [CommonModule, RouterModule.forChild(ProfilRoutes)]
})

export class ProfilModule {
  
}
