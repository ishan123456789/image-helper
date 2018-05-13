import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageHelperDirective } from './image-helper.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageHelperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ImageHelperDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
