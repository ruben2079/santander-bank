/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/models/photos';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  info: Photos[] = [];

  constructor(private shareDataService: ShareDataService){
  }

  ngOnInit(): void {
    this.shareDataService.currentData.subscribe(data => {
      this.info = data;
    }, err => {
      console.debug(err);
    });
  }
  
}
