import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-media-svg',
	templateUrl: './media-svg.component.html',
	styleUrls: ['./media-svg.component.scss']
})

export class MediaSvgComponent implements OnInit {
	images: string[];
	
	constructor() {}

	ngOnInit() {
		this.images = [
			"/assets/svg/andrew.svg",
		];
	}

	public imageStyle(image: string): Object {
		return {
			'background-image': `url('${image}')`,
		}
	}
}