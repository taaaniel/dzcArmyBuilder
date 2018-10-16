import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { CreateRosterService } from '../../_services/create-roster.service';
import { IRoster, CreateEmptyRosterInView } from '../../_models/IRoster';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  fullRoster: IRoster;

  constructor(
    public locale: LocaleService,
    public translation: TranslationService,
    private activeRoute: ActivatedRoute,
    private createRosterService: CreateRosterService,
  ) { }

  @Language() lang: string;

  ngOnInit() {

    this.fullRoster = CreateEmptyRosterInView();

    this.createRosterService.fullRoster$.subscribe((roster) => {
      this.fullRoster = roster;
    });

  }

  loadRoster() {
    // this.fullRoster.armySize = +this.route.snapshot.params['armySize'];
    // this.fullRoster.gameSize = this.route.snapshot.params['gameSize'];
    // this.fullRoster.armyName = this.route.snapshot.params['armyName'];
    // const id = this.route.snapshot.queryParams['armyName'];

    // console.log("armySize", this.route.snapshot.params);
  }


}
