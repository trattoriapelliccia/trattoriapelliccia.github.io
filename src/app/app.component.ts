import { Component, LOCALE_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  languageList = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'ja', label: '日本語' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'zh', label: '中文' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string, private translate: TranslateService) {
    translate.setDefaultLang('it');
    const browserLang = translate.getBrowserLang();
    const sessionLang = window.sessionStorage.getItem('language');
    const lang = !!sessionLang ? sessionLang : browserLang.match(/en|it|de|fr|es|zh|ja|ar/) ? browserLang : 'en';
    translate.use(lang);
  }
}