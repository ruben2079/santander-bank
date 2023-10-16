/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { Component, Input } from '@angular/core';
import { Photos } from 'src/models/photos';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  selector: 'app-left-list',
  templateUrl: './left-list.component.html',
  styleUrls: ['./left-list.component.scss']
})
export class LeftListComponent {
  @Input() leftList: Photos[] = [];
  selectedInfo: Photos[] = [];

  constructor(private shareDataService: ShareDataService){

  }

  selectedData(evt: Event, index: number): boolean{
    this.selectedInfo[0] = this.leftList[index];
    this.shareDataService.setData(this.selectedInfo);
    return false;
  }
}
