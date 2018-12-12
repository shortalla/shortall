import { Component, OnInit } from '@angular/core';
import { ImageOrientation } from '../../shared/image/image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-media-vector',
	templateUrl: './media-vector.component.html',
	styleUrls: ['./media-vector.component.scss']
})

export class MediaVectorComponent implements OnInit {
	public images: SafeResourceUrl[];
	public orientation: ImageOrientation;
	
	constructor() {}

	public ngOnInit(): void {
		this.images = [
			"/assets/vectors/andrew.svg",
		];
		this.orientation = ImageOrientation.Original;
	}
}
