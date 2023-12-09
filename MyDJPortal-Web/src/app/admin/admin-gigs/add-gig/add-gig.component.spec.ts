import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGigComponent } from './add-gig.component';

describe('AddGigComponent', () => {
  let component: AddGigComponent;
  let fixture: ComponentFixture<AddGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
