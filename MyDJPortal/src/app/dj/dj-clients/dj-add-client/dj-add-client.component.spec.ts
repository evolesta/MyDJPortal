import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjAddClientComponent } from './dj-add-client.component';

describe('DjAddClientComponent', () => {
  let component: DjAddClientComponent;
  let fixture: ComponentFixture<DjAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
