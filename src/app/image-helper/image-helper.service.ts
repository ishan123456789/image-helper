import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject   } from 'rxjs';

@Injectable()
export class ImageHelperService {
    public globalFallBackPath: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private globalFallBackPathIn = '';
    constructor() {
    }
    returnPath(): string {
        return this.globalFallBackPathIn;
    }
    public setGlobalFallbackImagePath(path) {
        this.globalFallBackPathIn = path;
        this.globalFallBackPath.next(path);
    }
}
