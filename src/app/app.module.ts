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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AllComponent,
    ExplicitComponent,
    NerdyComponent
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
