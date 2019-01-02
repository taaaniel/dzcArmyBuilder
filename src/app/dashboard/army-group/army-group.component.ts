import { Component, OnInit } from '@angular/core';
import { CreateRosterService } from '../../_services/create-roster.service';


@Component({
  selector: 'app-army-group',
  templateUrl: './army-group.component.html',
  styleUrls: ['./army-group.component.scss']
})
export class ArmyGroupComponent implements OnInit {

  groupName: string;
  battlegroupType;

  constructor(
    private createRosterService: CreateRosterService,
  ) { }

  ngOnInit() {
    this.battlegroupType = new Array();
    this.createRosterService.groupName$.subscribe((groupName) => {
      this.groupName = groupName;
      this.createBattleGroups(groupName);
    });
  }

  createBattleGroups(groupName) {
    this.battlegroupType.push(groupName);
      console.log("this.battlegroupType", this.battlegroupType, groupName);
  }

}
