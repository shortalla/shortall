import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-media-photo',
	templateUrl: './media-photo.component.html',
	styleUrls: ['./media-photo.component.scss']
})

export class MediaPhotoComponent implements OnInit {
	photos: string[];
	
	constructor() {}

	ngOnInit() {
		this.photos = [
			"/assets/photos/warschauer-sunset.jpg",
			"/assets/photos/warschauer-buildings.jpg",
			"/assets/photos/cafe-bird.jpg",
			"/assets/photos/berlin-autumn.jpg",
			"/assets/photos/berlin-city-view.jpg",
			"/assets/photos/ostkreuz-street-lights.jpg",
			"/assets/photos/ostkreuz-station.jpg",
			"/assets/photos/ostkreuz-tower.jpg"
		];
	}

	public photoStyle(photo: string): Object {
		return {
			'background-image': `url('${photo}')`,
		}
	}
}
