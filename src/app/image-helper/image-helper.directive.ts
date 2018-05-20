import { Directive, ElementRef, Renderer, Input , HostListener } from '@angular/core';
import { ImageHelperService } from './image-helper.service';
@Directive({
  selector: '[isImageHelper]'
})
export class ImageHelperDirective {
  @Input()ImageFallbackPath: string;
  public globalFallBackPath: string = '';

  @HostListener('error', ['$event'])
    onLoad() {
      this.el.nativeElement.src = this.ImageFallbackPath ? this.ImageFallbackPath : this.globalFallBackPath;  
    }
    constructor(private el: ElementRef,
      private renderer: Renderer,
      private global: ImageHelperService
    ) {
        this.global.globalFallBackPath.subscribe((data) => {
          this.globalFallBackPath = data;
      })
     }
     setGlobalFallBackPath(path: string) {
      this.globalFallBackPath = path;
     }
}
