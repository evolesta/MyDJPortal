import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjDeleteClientComponent } from './dj-delete-client.component';

describe('DjDeleteClientComponent', () => {
  let component: DjDeleteClientComponent;
  let fixture: ComponentFixture<DjDeleteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjDeleteClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjDeleteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
