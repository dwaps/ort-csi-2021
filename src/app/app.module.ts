import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterChildComponent } from './counter-child/counter-child.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterParentComponent,
    CounterChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
