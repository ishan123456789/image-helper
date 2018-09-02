import { Component, ViewEncapsulation } from '@angular/core';
import { ImageHelperService } from './image-helper/image-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor(public imgHlper: ImageHelperService) {
    this.imgHlper.setGlobalFallbackImagePath('https://www.gstatic.com/webp/gallery3/2.png');
  }
}
