import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-media',
	templateUrl: './media.component.html',
	styleUrls: ['./media.component.scss']
})

export class MediaComponent implements OnInit {
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
