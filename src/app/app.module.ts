import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Compo1Component } from './component/compo1/compo1.component';
import { StartComponent } from './component/start/start.component';
import { VaccinesComponent } from './component/vaccines/vaccines.component';
import { InfoComponent } from './component/info/info.component';
import { RecomendationsComponent } from './component/recomendations/recomendations.component';

import { ScrollService } from './services/scroll.service';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    StartComponent,
    VaccinesComponent,
    InfoComponent,
    RecomendationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ScrollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
