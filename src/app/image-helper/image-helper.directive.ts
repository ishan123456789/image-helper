import { Directive, ElementRef, Renderer, Input , HostListener } from '@angular/core';

@Directive({
  selector: '[isImageHelper]'
})
export class ImageHelperDirective {
  @Input()ImageFallbackPath: string;

  @HostListener('error', ['$event'])
    onLoad() {
      this.el.nativeElement.src = this.ImageFallbackPath;
    }
    constructor(private el: ElementRef,
      private renderer: Renderer) {
        console.log('hello');
     }

}
