import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArmyTriggerComponent } from './army-trigger/army-trigger.component';
import { DashboardComponent } from './dashboard.component';
import { ArmyCreatorComponent } from './army-creator/army-creator.component';


const DASHBOARD_ROUTES: Route[] = [
  { path: '', component : DashboardComponent,
    children: [
      { path: 'create-roster', component: ArmyTriggerComponent},
      { path: 'create-army/:gameSize/:armySize/:armyName', component: ArmyCreatorComponent}
    ]
  }
];


@NgModule({
  imports : [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: []
})


export class DashboardRoutingModule {}
