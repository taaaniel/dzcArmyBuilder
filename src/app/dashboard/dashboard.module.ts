import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { ArmyTriggerComponent } from './army-trigger/army-trigger.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';
import { CreateRosterService } from '../_services/create-roster.service';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ArmyCreatorComponent } from './army-creator/army-creator.component';
import { ArmyGroupComponent } from './army-group/army-group.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    LeftSidebarComponent,
    ArmyTriggerComponent,
    ArmyCreatorComponent,
    ArmyGroupComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    CreateRosterService
  ]
})
export class DashboardModule { }
