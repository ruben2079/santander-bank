/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftListComponent } from './left-list.component';

describe('LeftListComponent', () => {
  let component: LeftListComponent;
  let fixture: ComponentFixture<LeftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftListComponent]
    });
    fixture = TestBed.createComponent(LeftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
