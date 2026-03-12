import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjClients } from './dj-clients';

describe('DjClients', () => {
  let component: DjClients;
  let fixture: ComponentFixture<DjClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjClients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
