import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo1Component } from './component/compo1/compo1.component';
import { StartComponent } from './component/start/start.component';
import { VaccinesComponent } from './component/vaccines/vaccines.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    StartComponent,
    VaccinesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }