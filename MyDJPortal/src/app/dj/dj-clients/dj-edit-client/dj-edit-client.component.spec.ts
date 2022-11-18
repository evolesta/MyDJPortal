import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjEditClientComponent } from './dj-edit-client.component';

describe('DjEditClientComponent', () => {
  let component: DjEditClientComponent;
  let fixture: ComponentFixture<DjEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjEditClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
