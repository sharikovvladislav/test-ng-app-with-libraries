import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTestLibComponent } from './some-test-lib.component';

describe('SomeTestLibComponent', () => {
  let component: SomeTestLibComponent;
  let fixture: ComponentFixture<SomeTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
