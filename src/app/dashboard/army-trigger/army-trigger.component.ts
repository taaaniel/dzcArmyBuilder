import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { IRoster, CreateEmptyRosterInView } from '../../_models/IRoster';
import { CreateRosterService } from '../../_services/create-roster.service';

@Component({
  selector: 'app-army-trigger',
  templateUrl: './army-trigger.component.html',
  styleUrls: ['./army-trigger.component.scss']
})
export class ArmyTriggerComponent implements OnInit {

  roster: IRoster;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService,
    private createRosterService: CreateRosterService,
  ) { }

  @Language() lang: string;

  ngOnInit() {
    this.roster = CreateEmptyRosterInView();
  }

  getDataToCreateRoster(gameSize, armySize, armyName) {
    this.roster = {
      gameSize : gameSize,
      armySize : armySize,
      armyName : armyName,
    };
    this.createRosterService.shareRoster(this.roster);
  }

}
