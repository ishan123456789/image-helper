# ImageHelper
Angular 6 ready image helper package allows to add fallback image if primary fails.

[Working demo](https://image-helper.stackblitz.io)

### Install

```
npm install  image-helper --save
```
### Usage

Add module to your module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
 
import { ImageHelperModule } from 'image-helper';
 

@NgModule({
  imports: [
    BrowserModule, 
    ImageHelperModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Use it in you component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: '<img src='asfd.jpg' isImageHelper ImageFallbackPath="{{thePathToFallbackImage}}">'
})

export class AppComponent {
  thePathToFallbackImage = 'https://www.gstatic.com/webp/gallery3/2.png';
}

```

See also [editable stackblitz example](https://stackblitz.com/edit/image-helper).

### New Feature
No you can add a global fallback so now you don't need to enter a  `ImageFallbackPath="{{thePathToFallbackImage}}"` for every image although you can add it if you want some images to fallback to a particular url.

Here's the code for that:

```
import { Component } from '@angular/core';
import { ImageHelperService } from 'image-helper';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private global: ImageHelperService) {
    this.global.setGlobalFallbackImagePath('https://example.com/.png');
  }
}

```
### Contributions

I'm looking forward to add loader feature to this plugin any help will be apperciated.

