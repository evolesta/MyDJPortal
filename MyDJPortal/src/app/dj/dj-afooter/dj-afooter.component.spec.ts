import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjAfooterComponent } from './dj-afooter.component';

describe('DjAfooterComponent', () => {
  let component: DjAfooterComponent;
  let fixture: ComponentFixture<DjAfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjAfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjAfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
