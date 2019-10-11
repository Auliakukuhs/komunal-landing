import {NgModule} from '@angular/core';
import {FaqComponent} from './faq.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FaqRoutes} from './faq.routes';

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, RouterModule.forChild(FaqRoutes)]
})

export class FaqModule {

}
