import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
