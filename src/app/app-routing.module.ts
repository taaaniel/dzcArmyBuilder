import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Route[] = [

];


@NgModule({
  imports : [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}
