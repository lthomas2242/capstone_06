import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [HomeComponent]
})
export class AppModule { }
