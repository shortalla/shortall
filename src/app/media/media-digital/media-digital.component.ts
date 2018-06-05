import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-media-digital',
	templateUrl: './media-digital.component.html',
	styleUrls: ['./media-digital.component.scss']
})

export class MediaDigitalComponent implements OnInit {
	images: string[];
	
	constructor() {}

	ngOnInit() {
		this.images = [
			"/assets/images/family.png",
			"/assets/images/self-portrait.png",
			"/assets/images/abstract-shapes.png",
		];
	}

	public imageStyle(image: string): Object {
		return {
			'background-image': `url('${image}')`,
		}
	}
}
