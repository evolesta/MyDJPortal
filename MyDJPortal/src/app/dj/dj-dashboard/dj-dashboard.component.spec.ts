import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjDashboardComponent } from './dj-dashboard.component';

describe('DjDashboardComponent', () => {
  let component: DjDashboardComponent;
  let fixture: ComponentFixture<DjDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
