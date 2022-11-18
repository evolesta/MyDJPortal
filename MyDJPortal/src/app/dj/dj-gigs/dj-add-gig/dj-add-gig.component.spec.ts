import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjAddGigComponent } from './dj-add-gig.component';

describe('DjAddGigComponent', () => {
  let component: DjAddGigComponent;
  let fixture: ComponentFixture<DjAddGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjAddGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjAddGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
