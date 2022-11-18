import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjGigsComponent } from './dj-gigs.component';

describe('DjGigsComponent', () => {
  let component: DjGigsComponent;
  let fixture: ComponentFixture<DjGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
