import { TestBed } from '@angular/core/testing';

import { MySeviceService } from './my-sevice.service';

describe('MySeviceService', () => {
  let service: MySeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
