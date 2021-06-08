import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BtChronoComponent } from './bt-chrono/bt-chrono.component';
import { ChronoComponent } from './chrono/chrono.component';


@NgModule({
  declarations: [
    AppComponent,
    BtChronoComponent,
    ChronoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
