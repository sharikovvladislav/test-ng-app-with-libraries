import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeTestLibModule, TEST_PROVIDER_TOKEN } from 'some-test-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomeTestLibModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(TEST_PROVIDER_TOKEN) testProviderToken: string) {
    console.log('>> woot', testProviderToken);
  }
}
