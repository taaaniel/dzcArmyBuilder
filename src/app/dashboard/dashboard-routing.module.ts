import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArmyTriggerComponent } from './army-trigger/army-trigger.component';
import { DashboardComponent } from './dashboard.component';


const DASHBOARD_ROUTES: Route[] = [
  { path : '', component : DashboardComponent,
    children: [
      { path : 'create-roster', component : ArmyTriggerComponent}
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
