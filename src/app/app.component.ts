import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'komunal-landingpage';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('id');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|in/) ? browserLang : 'id');
  }
}
