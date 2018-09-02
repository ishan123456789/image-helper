import { Directive, ElementRef, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ImageHelperService } from './image-helper.service';

@Directive({
  selector: '[isImageHelper]'
})
export class ImageHelperDirective implements OnInit, AfterViewInit {
  @Input() ImageFallbackPath: string;
  public globalFallBackPath = '';
  private originalPath = '';
  doneLoading = false;

  constructor
    (
    private el: ElementRef,
    private global: ImageHelperService
    ) {
  }
  // @HostListener('onload', ['$event'])
  // pageLoad() {
  //   // runRestHere
  //   // this.el.nativeElement.src = this.originalPath;
  // }
  // @HostListener('error', ['$event'])
  // onError() {
  //   console.log(this.el);
  //   this.el.nativeElement.src = this.ImageFallbackPath ? this.ImageFallbackPath : this.globalFallBackPath;
  //   // this.el.nativeElement.src = '';
  // }
  ngAfterViewInit() {
      this.el.nativeElement.onload = () => {this.createImage(); };
  }
  setGlobalFallBackPath(path: string) {
    this.globalFallBackPath = path;
  }
  ngOnInit() {
    this.originalPath = this.el.nativeElement.src;
    this.el.nativeElement.src = '';
    this.globalFallBackPath = this.global.returnPath();
    this.showLoader();
    this.global.globalFallBackPath.subscribe((data) => {
      this.globalFallBackPath = data;
    });
    Promise.all([this.showLoader()]);
  }
  showLoader() {
    return new Promise(resolve => {
        console.log(this.el.nativeElement);
        const loader = document.createElement('div');
        loader.innerHTML = this.prepareLoader();
        this.el.nativeElement.style.display = 'none';
        if (this.el.nativeElement.parentNode.children.length === 1) {
          this.el.nativeElement.parentNode.appendChild(loader.firstChild);
        }
      resolve(true);
    });
  }

  createImage() {
      this.el.nativeElement.style.display = 'block';
      console.log(this.el);
      this.el.nativeElement.parentNode.children[1].remove();
  }
  prepareLoader() {
    return `<div class="sk-rotating-plane"></div>`;
  }
}
