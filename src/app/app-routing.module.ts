import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NerdyComponent } from './nerdy/nerdy.component';
import { ExplicitComponent } from './explicit/explicit.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

const routes: Routes = [
  {path: '', component: AllComponent, pathMatch: 'full'},
  {path: 'nerdy', component: NerdyComponent},
  {path: 'explicit', component: ExplicitComponent},
  { path: '**', component: WrongRouteComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
