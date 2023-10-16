/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhotoService  } from 'src/services/photo.service';
import { Photos } from 'src/models/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'santander-bank';
  photos: Photos[] = [];

  subscription: Subscription | any;

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    this.subscription = this.photoService.getPhotos().subscribe(res => {
      this.photos = res;
    }, (err) => {
      console.debug(err);
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
