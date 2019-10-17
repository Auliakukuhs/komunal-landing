import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit, AfterViewInit {
  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('id');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('id');
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


