import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AllComponent } from './all/all.component';
import { ExplicitComponent } from './explicit/explicit.component';
import { NerdyComponent } from './nerdy/nerdy.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokeComponent } from './jokes/joke/joke.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AllComponent,
    ExplicitComponent,
    NerdyComponent,
    JokesComponent,
    JokeComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
