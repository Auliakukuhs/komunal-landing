import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit, AfterViewInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('id');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|in/) ? browserLang : 'id');
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    console.info(language)
    localStorage.setItem('locale', language);
    var cImage = document.getElementById("flag") as HTMLImageElement;
    switch (language) {
      case "id":
        cImage.src = "../../assets/img/id.png";
        break;
      default:
        cImage.src = "../../assets/img/uk.png";
        break;
    }
  }

}


