import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from '../../../../node_modules/angular-l10n';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }

  @Language() lang: string;

  ngOnInit() {

    console.log("leftsidebar works")
  }


}
