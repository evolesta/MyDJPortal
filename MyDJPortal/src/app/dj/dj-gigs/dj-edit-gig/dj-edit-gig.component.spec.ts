import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjEditGigComponent } from './dj-edit-gig.component';

describe('DjEditGigComponent', () => {
  let component: DjEditGigComponent;
  let fixture: ComponentFixture<DjEditGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjEditGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjEditGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
