import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPice } from './gallery-pice';

describe('GalleryPice', () => {
  let component: GalleryPice;
  let fixture: ComponentFixture<GalleryPice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryPice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
