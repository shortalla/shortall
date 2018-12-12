import { Component, OnInit } from '@angular/core';
import { ImageOrientation } from '../../shared/image/image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-media-digital',
	templateUrl: './media-digital.component.html',
	styleUrls: ['./media-digital.component.scss']
})

export class MediaDigitalComponent implements OnInit {
	public images: SafeResourceUrl[];
	public orientation: ImageOrientation;
	
	constructor() {}

	public ngOnInit(): void {
		this.images = [
			"/assets/images/family.png",
			"/assets/images/self-portrait.png",
			"/assets/images/abstract-shapes.png",
		];
		this.orientation = ImageOrientation.Square;
	}
}
