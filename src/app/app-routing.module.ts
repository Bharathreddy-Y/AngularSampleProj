import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormcomponentComponent} from './formcomponent/formcomponent.component'
import {CustomformcomponentComponent} from './customformcomponent/customformcomponent.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {path :'formcomponent', component: FormcomponentComponent},
  //     {path :'customform', component: CustomformcomponentComponent},
  {path:'',redirectTo:'Dashboard', pathMatch: 'full' },
  {path:"Dashboard", component:DashboardComponent,
    children:[
      {path :'formcomponent', component: FormcomponentComponent},
      {path :'customform', component: CustomformcomponentComponent},
      {path:'',redirectTo:'formcomponent', pathMatch: 'full' },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
