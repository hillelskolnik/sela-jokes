import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NerdyComponent } from './nerdy/nerdy.component';
import { ExplicitComponent } from './explicit/explicit.component';

const routes: Routes = [
  {path: '', component: AllComponent, pathMatch: 'full'},
  {path: 'nerdy', component: NerdyComponent},
  {path: 'explicit', component: ExplicitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
