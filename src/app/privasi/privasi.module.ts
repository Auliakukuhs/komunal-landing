import {NgModule} from "@angular/core";
import {PrivasiComponent} from "./privasi.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PrivasiRoutes} from "./privasi.routes";

@NgModule({
  declarations: [PrivasiComponent],
  imports: [CommonModule, RouterModule.forChild(PrivasiRoutes)]
})

export class PrivasiModule {

}
