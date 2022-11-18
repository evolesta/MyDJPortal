import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjDeleteGigComponent } from './dj-delete-gig.component';

describe('DjDeleteGigComponent', () => {
  let component: DjDeleteGigComponent;
  let fixture: ComponentFixture<DjDeleteGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjDeleteGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjDeleteGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
