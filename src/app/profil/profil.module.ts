import {NgModule} from "@angular/core";
import {ProfilComponent} from "./profil.component";
import {RouterModule} from "@angular/router";
import {ProfilRoutes} from "./profil.routes";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [ProfilComponent],
  imports: [CommonModule, RouterModule.forChild(ProfilRoutes), TranslateModule]
})

export class ProfilModule {

}
