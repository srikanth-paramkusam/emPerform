import { PerformanceComponent } from './performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:PerformanceComponent,children:[
    {
      path:'',redirectTo:'dashboard',pathMatch:'full',
    },
    {
      path:'dashboard',component:DashboardComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
