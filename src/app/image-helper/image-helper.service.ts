import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject   } from 'rxjs/Rx';

@Injectable()
export class ImageHelperService {
    public globalFallBackPath: BehaviorSubject<string> = new BehaviorSubject<string>('');
    
    constructor() {
        setTimeout(() => {
          // this.loader.display(true);
        }, 2000);
      }  
      public setGlobalFallbackImagePath(path) {
        this.globalFallBackPath.next(path);
      }
       
}