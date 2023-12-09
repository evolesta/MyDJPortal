import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGigsComponent } from './admin-gigs.component';

describe('AdminGigsComponent', () => {
  let component: AdminGigsComponent;
  let fixture: ComponentFixture<AdminGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
