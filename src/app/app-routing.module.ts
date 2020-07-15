
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { DeployComponent } from './deploy/deploy.component';




const routes: Routes = [
    { path: "", component: HomeComponent,   pathMatch: "full"   },
    { path: 'job', component: JobComponent },
    { path: 'home', component: HomeComponent },
    { path: 'deploy', component: DeployComponent }
  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []

  })
  export class AppRoutingModule { }
  