# ImageHelper

Ever experienced broken image like ![Image example](https://static.havemybooks.com/external/broken-image.png)

If ever this happen that you loose your image but there will always be a backup for you. We've added an extra feature which will boost your page load time to upto 10X. As we load the image after the page load successfully so you angular app will turn much faster using this plugin.

## Getting Started

    npm install image-helper --save
*Version above 3.0 of image-helper is suggested*
        Then in your code `app.module.ts`
        
        import { ImageHelperModule } from  './image-helper/image-helper.module';
	    @NgModule({    
		    imports: [
		    ...otherImports,    
		    ImageHelperModule    
		    ]
	    })
Then in your code `app.component.ts`

    import { ImageHelperService, ImageConfig } from  './image-helper/image-helper.service';
    constructor(public  imgHelper:  ImageHelperService) {}    
    localConfig:  ImageConfig  = { imageFallbackPath:  'https://www.gstatic.com/webp/gallery3/1.png',
		addLoader:  true,
		loader:  'rotating-plane',
		pageLoadBoost:  true
	};
    ngOnInit() {
		    this.imgHelper.setGlobal({ imageFallbackPath:  'https://www.gstatic.com/webp/gallery3/2.png',    
		    addLoader:  true,    
		    loader:  'rotating-plane',    
		    pageLoadBoost:  true    
	    });    
    }
Then in your code `app.component.scss`

    @import  '~image-helper/loader';


### Working Examples

Here's the demo on [stackblitz](https://stackblitz.com/edit/image-demo-3)


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 
To install a particular version do it like this `npm i image-helper@3.0.0 --save`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

Thanks to everyone who'll use this plugin as this is my first plugin so actively looking forward to work on it. So all the issues are welcomed and I'll look forward to actively work on them.