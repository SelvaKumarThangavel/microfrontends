import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';

const routes: Routes = [
  {path : 'addDetails', component : AdddetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdddetailsComponent];