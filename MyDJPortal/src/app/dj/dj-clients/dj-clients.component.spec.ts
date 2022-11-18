import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjClientsComponent } from './dj-clients.component';

describe('DjClientsComponent', () => {
  let component: DjClientsComponent;
  let fixture: ComponentFixture<DjClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
