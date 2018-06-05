import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'as-image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.scss']
})

export class ImageListComponent implements OnInit {
	@Input() images: string[];
	
	constructor() {}

	ngOnInit() {}

	public imageStyle(image: string): Object {
		return {
			'background-image': `url('${image}')`,
		}
	}
}
