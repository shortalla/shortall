import { Component, OnInit } from '@angular/core';
import { ImageOrientation } from '../../shared/image/image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-media-photo',
	templateUrl: './media-photo.component.html',
	styleUrls: ['./media-photo.component.scss']
})

export class MediaPhotoComponent implements OnInit {
	images: SafeResourceUrl[];
	orientation: ImageOrientation;
	
	constructor() {}

	ngOnInit() {
		this.images = [
			"/assets/photos/warschauer-sunset.jpg",
			"/assets/photos/warschauer-buildings.jpg",
			"/assets/photos/cafe-bird.jpg",
			"/assets/photos/berlin-autumn.jpg",
			"/assets/photos/berlin-city-view.jpg",
			"/assets/photos/ostkreuz-street-lights.jpg",
			"/assets/photos/ostkreuz-station.jpg",
			"/assets/photos/ostkreuz-tower.jpg"
		];
		this.orientation = ImageOrientation.Landscape;
	}
}
