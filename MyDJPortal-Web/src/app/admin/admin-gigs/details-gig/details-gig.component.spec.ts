import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGigComponent } from './details-gig.component';

describe('DetailsGigComponent', () => {
  let component: DetailsGigComponent;
  let fixture: ComponentFixture<DetailsGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
