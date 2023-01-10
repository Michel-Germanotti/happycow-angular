import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj4Component } from './proj4.component';

describe('Proj4Component', () => {
  let component: Proj4Component;
  let fixture: ComponentFixture<Proj4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
