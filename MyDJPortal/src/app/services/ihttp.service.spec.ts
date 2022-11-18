import { TestBed } from '@angular/core/testing';

import { IhttpService } from './ihttp.service';

describe('IhttpService', () => {
  let service: IhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
