import {NgModule} from "@angular/core";
import {HubungikamiComponent} from "./hubungikami.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HubingiKamiRoutes} from "./hubungikami.routes";

@NgModule({
  declarations: [HubungikamiComponent],
  imports: [CommonModule, RouterModule.forChild(HubingiKamiRoutes)]
})

export class HubungikamiModule {
  
}
