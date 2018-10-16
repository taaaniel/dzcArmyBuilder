import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from '../../../../node_modules/angular-l10n';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { IRoster } from '../../_models/IRoster';
import { CreateRosterService } from '../../_services/create-roster.service';
import { IBattleGroups } from '../../_models/IBattleGroups';

@Component({
  selector: 'app-army-creator',
  templateUrl: './army-creator.component.html',
  styleUrls: ['./army-creator.component.scss']
})
export class ArmyCreatorComponent implements OnInit {

  roster: IRoster;
  battleGroups: IBattleGroups;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService,
    private activeRoute: ActivatedRoute,
    private createRosterService: CreateRosterService
  ) { }

  @Language() lang: string;

  ngOnInit() {
    const gameSize = this.activeRoute.snapshot.params['gameSize'];
    const armySize = this.activeRoute.snapshot.params['armySize'];
    const armyName = this.activeRoute.snapshot.params['armyName'];
    this.getDataToCreateRoster(gameSize, armySize, armyName);
    this.loadBattlegroups(armySize);
  }

  getDataToCreateRoster(gameSize, armySize, armyName) {
    this.roster = {
      gameSize : gameSize,
      armySize : armySize,
      armyName : armyName,
    };
    this.createRosterService.shareRoster(this.roster);
  }

  loadBattlegroups(armySize) {
    console.log(armySize);
    switch (armySize) {
      case 'skirmish': {
         this.battleGroups = {
            total: {
              min: 0,
              max: 5
            },
            hq: {
              min: 0,
              max: 1
            },
            armor: {
              min: 1,
              max: 1
            },
            infantry: {
              min: 1,
              max: 2
            },
            special: {
              min: 0,
              max: 1
            },
            fleet: {
              min: 0,
              max: 0
            }
         };
         break;
      }
      case 'clash': {
        this.battleGroups = {
          total: {
            min: 0,
            max: 6
          },
          hq: {
            min: 1,
            max: 1
          },
          armor: {
            min: 1,
            max: 2
          },
          infantry: {
            min: 1,
            max: 2
          },
          special: {
            min: 0,
            max: 2
          },
          fleet: {
            min: 0,
            max: 1
          }
       };
         break;
      }
      case 'battle': {
        this.battleGroups = {
          total: {
            min: 0,
            max: 7
          },
          hq: {
            min: 1,
            max: 1
          },
          armor: {
            min: 1,
            max: 2
          },
          infantry: {
            min: 1,
            max: 2
          },
          special: {
            min: 0,
            max: 2
          },
          fleet: {
            min: 0,
            max: 1
          }
       };
         break;
      }
    }
  }

}
