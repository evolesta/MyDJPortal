import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGigComponent } from './delete-gig.component';

describe('DeleteGigComponent', () => {
  let component: DeleteGigComponent;
  let fixture: ComponentFixture<DeleteGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
