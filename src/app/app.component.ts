import { Component } from '@angular/core';
import { ImageHelperService } from './image-helper/image-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public imgHlper: ImageHelperService) {
    this.imgHlper.setGlobalFallbackImagePath('https://www.gstatic.com/webp/gallery3/2.png');
  }
}
