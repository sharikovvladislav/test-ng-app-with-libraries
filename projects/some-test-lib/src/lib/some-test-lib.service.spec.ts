import { TestBed } from '@angular/core/testing';

import { SomeTestLibService } from './some-test-lib.service';

describe('SomeTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeTestLibService = TestBed.get(SomeTestLibService);
    expect(service).toBeTruthy();
  });
});
