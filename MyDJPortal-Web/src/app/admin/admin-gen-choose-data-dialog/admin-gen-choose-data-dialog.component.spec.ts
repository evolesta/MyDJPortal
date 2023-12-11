import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenChooseDataDialogComponent } from './admin-gen-choose-data-dialog.component';

describe('AdminGenChooseDataDialogComponent', () => {
  let component: AdminGenChooseDataDialogComponent;
  let fixture: ComponentFixture<AdminGenChooseDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenChooseDataDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenChooseDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
