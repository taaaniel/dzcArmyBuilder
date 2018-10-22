import { Component, OnInit } from '@angular/core';
import { CreateRosterService } from '../../_services/create-roster.service';


@Component({
  selector: 'app-army-group',
  templateUrl: './army-group.component.html',
  styleUrls: ['./army-group.component.scss']
})
export class ArmyGroupComponent implements OnInit {

  groupName: string;

  constructor(
    private createRosterService: CreateRosterService,
  ) { }

  ngOnInit() {
    this.createRosterService.groupName$.subscribe((groupName) => {
      this.groupName = groupName;
    });
  }

}
