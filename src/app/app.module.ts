import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoService } from 'src/services/photo.service';
import { InfoContainerComponent } from './info-container/info-container.component';
import { LeftListComponent } from './left-list/left-list.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoContainerComponent,
    LeftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }