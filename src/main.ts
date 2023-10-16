/*
Front End Engineer: Ruben Guzman
Email: ruben_guzman1020@hotmail.com
Online Project based on Angular: https://www.pryices.com
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
