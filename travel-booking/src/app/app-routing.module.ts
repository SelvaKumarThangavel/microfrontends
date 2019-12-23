import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth-guard';
import { HomeComponent } from './home/home.component';
import { SLATrackerComponent } from './slatracker/slatracker.component';
import { TestApplicationComponent } from './test-application/test-application.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent, canActivate: [AuthGuard]},
  {path : 'home', component : HomeComponent},
  {path : 'home/:this.param1', component : SLATrackerComponent},
  {path : 'home/test/:this.param1', component : TestApplicationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[LoginComponent];