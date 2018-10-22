import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { IRoster } from '../_models/IRoster';

@Injectable({
  providedIn: 'root'
})
export class CreateRosterService {

  fullRoster$ = new Subject<IRoster>();
  groupName$ = new Subject<string>();

  shareRoster(roster: IRoster) {
    this.fullRoster$.next(roster);
  }

  addedGroup(titleGroup: string) {
    this.groupName$.next(titleGroup)
  }

}
