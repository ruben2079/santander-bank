/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { Photos } from 'src/models/photos';
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private data: BehaviorSubject<Photos[]> = new BehaviorSubject<Photos[]>([]);
  currentData = this.data.asObservable();

  constructor() { }

  setData(data: Photos[]) {
    this.data.next(data);
  }
}
