import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjRequest } from './dj-request';

describe('DjRequest', () => {
  let component: DjRequest;
  let fixture: ComponentFixture<DjRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
