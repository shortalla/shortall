import { Component, OnInit, Input } from '@angular/core';
import { ImageOrientation } from '../image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-image-thumbnail',
	templateUrl: './image-thumbnail.component.html',
	styleUrls: ['./image-thumbnail.component.scss']
})

export class ImageThumbnailComponent implements OnInit {
	@Input() image: SafeResourceUrl;
	@Input() hasBorder?: boolean;
	@Input() hasGradient?: boolean;
	@Input() orientation?: ImageOrientation;
	
	constructor() {}

	ngOnInit() {}

	public imageStyle(): Object {
		return { 'background-image': `url('${this.image}')` }
	}

	public imageClass(): Object {
		return {
			'border': this.hasBorder,
			'gradient': this.hasBorder,
			'landscape': this.orientation === ImageOrientation.Landscape,
			'original': this.orientation === ImageOrientation.Original,
			'portrait': this.orientation === ImageOrientation.Portrait,
			'square': this.orientation === ImageOrientation.Square
		}
	}
}
