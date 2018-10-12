import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from '../../../../node_modules/angular-l10n';

@Component({
  selector: 'app-army-trigger',
  templateUrl: './army-trigger.component.html',
  styleUrls: ['./army-trigger.component.scss']
})
export class ArmyTriggerComponent implements OnInit {

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }

  @Language() lang: string;

  ngOnInit() {
  }

}
