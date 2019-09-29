import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-some-test-lib',
  template: `
    <p>
      some-test-lib works!
    </p>

  <div *ngIf="works">works</div>
  `,
  styles: []
})
export class SomeTestLibComponent implements OnInit {
  public works: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
