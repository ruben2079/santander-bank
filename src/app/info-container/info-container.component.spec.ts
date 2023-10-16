/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContainerComponent } from './info-container.component';

describe('InfoContainerComponent', () => {
  let component: InfoContainerComponent;
  let fixture: ComponentFixture<InfoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContainerComponent]
    });
    fixture = TestBed.createComponent(InfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
