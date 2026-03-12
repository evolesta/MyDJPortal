import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjClientsMod } from './dj-clients-mod';

describe('DjClientsMod', () => {
  let component: DjClientsMod;
  let fixture: ComponentFixture<DjClientsMod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjClientsMod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjClientsMod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
