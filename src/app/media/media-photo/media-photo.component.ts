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
			"/assets/images/warschauer-sunset.jpg",
			"/assets/images/warschauer-buildings.jpg",
			"/assets/images/cafe-bird.jpg",
			"/assets/images/berlin-autumn.jpg",
			"/assets/images/berlin-city-view.jpg",
			"/assets/images/ostkreuz-street-lights.jpg",
			"/assets/images/ostkreuz-station.jpg",
			"/assets/images/ostkreuz-tower.jpg"
		];
	}

	public photoStyle(photo: string): Object {
		return {
			'background-image': `url('${photo}')`,
		}
	}
}
