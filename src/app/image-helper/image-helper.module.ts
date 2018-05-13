import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ImageHelperDirective } from './image-helper.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [ImageHelperDirective],
  exports: [ImageHelperDirective],
})
export class ImageHelperModule { }
