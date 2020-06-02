import { Component, LOCALE_ID, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = [
    { code: 'en', label: 'English'},
    { code: 'es', label: 'Español'},
    { code: 'fr', label: 'Français'}
  ];
  subdomain = "/";

  constructor(@Inject(LOCALE_ID) protected localeId: string, @Inject(APP_BASE_HREF) public baseHref: string) {
     // for GitHub Pages
     // e.g. 
     //   /angular-cli-i18n-sample/en
     //   angular-cli-i18n-sample  
     const path = baseHref.split("/")[1];
     if(!this.languages.map(lang => lang.code).includes(path)) {
        this.subdomain = `/${path}/`;
     }
  }
}
