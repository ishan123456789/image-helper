# ImageHelper
Angular 6 ready image helper package allows to add fallback image if primary fails.[demo](https://image-helper.stackblitz.io)

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
