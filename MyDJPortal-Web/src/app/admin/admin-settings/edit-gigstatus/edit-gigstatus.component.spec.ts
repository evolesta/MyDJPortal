import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGigstatusComponent } from './edit-gigstatus.component';

describe('EditGigstatusComponent', () => {
  let component: EditGigstatusComponent;
  let fixture: ComponentFixture<EditGigstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGigstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGigstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
