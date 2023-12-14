import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGigstatusComponent } from './delete-gigstatus.component';

describe('DeleteGigstatusComponent', () => {
  let component: DeleteGigstatusComponent;
  let fixture: ComponentFixture<DeleteGigstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGigstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGigstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
