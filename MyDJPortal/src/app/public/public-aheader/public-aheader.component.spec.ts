import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAheaderComponent } from './public-aheader.component';

describe('PublicAheaderComponent', () => {
  let component: PublicAheaderComponent;
  let fixture: ComponentFixture<PublicAheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
