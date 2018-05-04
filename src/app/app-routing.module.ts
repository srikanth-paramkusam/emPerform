import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:'',redirectTo:'auth',pathMatch:'full'
    },
    {  
        path: 'auth', loadChildren: './auth/auth.module#AuthModule' 
    },
    {  
        path: 'performance', loadChildren: './performance/performance.module#PerformanceModule' 
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
