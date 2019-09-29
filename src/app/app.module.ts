import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeTestLibModule } from 'some-test-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomeTestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
