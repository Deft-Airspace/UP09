import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkColumn } from './mark-column';

describe('MarkColumn', () => {
  let component: MarkColumn;
  let fixture: ComponentFixture<MarkColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkColumn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
