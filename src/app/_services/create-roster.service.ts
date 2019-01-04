import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { IRoster } from '../_models/IRoster';

@Injectable({
  providedIn: 'root'
})
export class CreateRosterService {

  fullRoster$ = new Subject<IRoster>();
  groupName$ = new Subject<string>();
  battleGroups$ = new Subject<string>();

  shareRoster(roster: IRoster) {
    this.fullRoster$.next(roster);
    console.log('roster', roster);
  }

  addedGroup(titleGroup: string) {
    this.groupName$.next(titleGroup);
  }

}
