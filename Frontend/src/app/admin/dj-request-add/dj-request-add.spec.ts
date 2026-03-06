import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjRequestAdd } from './dj-request-add';

describe('DjRequestAdd', () => {
  let component: DjRequestAdd;
  let fixture: ComponentFixture<DjRequestAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjRequestAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjRequestAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
