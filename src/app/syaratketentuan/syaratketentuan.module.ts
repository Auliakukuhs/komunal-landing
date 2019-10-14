import {NgModule} from "@angular/core";
import {SyaratketentuanComponent} from "./syaratketentuan.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SyaratKetentuanRoutes} from "./syaratketentuan.routes";

@NgModule({
  declarations: [SyaratketentuanComponent],
  imports: [CommonModule, RouterModule.forChild(SyaratKetentuanRoutes)]
})

export class SyaratketentuanModule {

}
