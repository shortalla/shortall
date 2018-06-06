import { Component, OnInit } from '@angular/core';
import { ImageOrientation } from '../../shared/image/image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-media-vector',
	templateUrl: './media-vector.component.html',
	styleUrls: ['./media-vector.component.scss']
})

export class MediaVectorComponent implements OnInit {
	images: SafeResourceUrl[];
	orientation: ImageOrientation;
	
	constructor() {}

	ngOnInit() {
		this.images = [
			"/assets/vectors/andrew.svg",
		];
		this.orientation = ImageOrientation.Original;
	}
}