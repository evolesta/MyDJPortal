import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjAheaderComponent } from './dj-aheader.component';

describe('DjAheaderComponent', () => {
  let component: DjAheaderComponent;
  let fixture: ComponentFixture<DjAheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjAheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjAheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
