import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from '../../../../node_modules/angular-l10n';
import { IRoster } from '../../_models/IRoster';

@Component({
  selector: 'app-army-trigger',
  templateUrl: './army-trigger.component.html',
  styleUrls: ['./army-trigger.component.scss']
})
export class ArmyTriggerComponent implements OnInit {

  roster: IRoster;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService
  ) { }

  @Language() lang: string;

  ngOnInit() {
    this.roster = {
      gameSize: '',
      armySize: 0,
      armyName: ''
    };
  }

  createRoster(gameSize, armySize, armyName) {
    console.log("asasa", gameSize, armySize, armyName);
  }

}
