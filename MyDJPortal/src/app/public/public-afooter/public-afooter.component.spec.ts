import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAfooterComponent } from './public-afooter.component';

describe('PublicAfooterComponent', () => {
  let component: PublicAfooterComponent;
  let fixture: ComponentFixture<PublicAfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
