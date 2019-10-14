import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxPopperModule } from 'ngx-popper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutes } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPopperModule.forRoot({trigger: 'hover'}),
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
