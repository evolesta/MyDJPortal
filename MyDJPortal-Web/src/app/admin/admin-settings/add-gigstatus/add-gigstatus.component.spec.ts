import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGigstatusComponent } from './add-gigstatus.component';

describe('AddGigstatusComponent', () => {
  let component: AddGigstatusComponent;
  let fixture: ComponentFixture<AddGigstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGigstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGigstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
