import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeTestLibComponent } from './some-test-lib.component';

export const TEST_PROVIDER_TOKEN = new InjectionToken('test-provider-token');

// dynamic
@NgModule({
  declarations: [SomeTestLibComponent],
  imports: [
    CommonModule
  ],
  exports: [SomeTestLibComponent]
})
export class SomeTestLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SomeTestLibModule,
      providers: [
        { provide: TEST_PROVIDER_TOKEN, useValue: 'test-provider-token' }
      ]
    }
  }
}
