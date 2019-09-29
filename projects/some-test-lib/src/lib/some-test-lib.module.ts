import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeTestLibComponent } from './some-test-lib.component';



@NgModule({
  declarations: [SomeTestLibComponent],
  imports: [
    CommonModule
  ],
  exports: [SomeTestLibComponent]
})
export class SomeTestLibModule { }
