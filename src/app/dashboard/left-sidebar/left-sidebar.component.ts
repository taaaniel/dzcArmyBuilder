import { Component, OnInit } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { CreateRosterService } from '../../_services/create-roster.service';
import { IRoster, CreateEmptyRosterInView } from '../../_models/IRoster';

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
    private createRosterService: CreateRosterService,
  ) { }

  @Language() lang: string;

  ngOnInit() {

    this.fullRoster = CreateEmptyRosterInView();

    this.createRosterService.fullRoster$.subscribe((roster) => {
      this.fullRoster = roster;
    });
    console.log('leftsidebar works');
  }


}
