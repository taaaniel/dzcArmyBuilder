import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from '../../../node_modules/angular-l10n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedLanguage: string;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }

  @Language() lang: string;


  ngOnInit() {
    this.selectedLanguage = this.locale.getCurrentLanguage();
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
    this.selectedLanguage = language;
  }


}
