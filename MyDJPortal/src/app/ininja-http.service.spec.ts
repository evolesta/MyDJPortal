import { TestBed } from '@angular/core/testing';

import { IninjaHttpService } from './ininja-http.service';

describe('IninjaHttpService', () => {
  let service: IninjaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IninjaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
