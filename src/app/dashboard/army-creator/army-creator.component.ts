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
  battleGroups: Array<object>;
  groupTypeName;


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
    console.log('llll', this.battleGroups)
  }

  arrayOfButton(n: number): any[] {
    return Array(n);
  }

  addGroup(title) {
    this.createRosterService.addedGroup(title);
    this.checkNumberOfBattlegroupType(title);
  }

  checkNumberOfBattlegroupType(title) {
    this.groupTypeName = this.battleGroups.filter(element => element.title === title);
    console.log('33333', this.groupTypeName, this.battleGroups);
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
         this.battleGroups = [
           {
            title: 'total',
            min: 0,
            max: 5
          },
          {
            title: 'hq',
            min: 0,
            max: 1
          },
          {
            title: 'armor',
            min: 1,
            max: 1
          },
          {
            title: 'infantry',
            min: 1,
            max: 2
          },
          {
            title: 'special',
            min: 0,
            max: 1
          },
          {
            title: 'fleet',
            min: 0,
            max: 0
          }
        ];
         break;
      }
      case 'clash': {
        this.battleGroups = [
          {
            title: 'total',
            min: 0,
            max: 6
          },
          {
            title: 'hq',
            min: 1,
            max: 1
          },
          {
            title: 'armor',
            min: 1,
            max: 2
          },
          {
            title: 'infantry',
            min: 1,
            max: 2
          },
          {
            title: 'special',
            min: 0,
            max: 2
          },
          {
            title: 'fleet',
            min: 0,
            max: 1
          }
        ];

         break;
      }
      case 'battle': {
        this.battleGroups = [
          {
            title: 'total',
            min: 0,
            max: 7
          },
          {
            title: 'hq',
            min: 1,
            max: 1
          },
          {
            title: 'armor',
            min: 1,
            max: 2
          },
          {
            title : 'infantry',
            min: 1,
            max: 2
          },
          {
            title: 'special',
            min: 0,
            max: 2
          },
          {
            title: 'fleet',
            min: 0,
            max: 1
          }
        ];
         break;
      }
    }
  }

}
