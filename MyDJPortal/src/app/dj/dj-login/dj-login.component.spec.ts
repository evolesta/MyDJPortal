import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjLoginComponent } from './dj-login.component';

describe('DjLoginComponent', () => {
  let component: DjLoginComponent;
  let fixture: ComponentFixture<DjLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
