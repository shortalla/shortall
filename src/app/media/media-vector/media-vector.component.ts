import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-media-vector',
	templateUrl: './media-vector.component.html',
	styleUrls: ['./media-vector.component.scss']
})

export class MediaVectorComponent implements OnInit {
	vectors: string[];
	
	constructor() {}

	ngOnInit() {
		this.vectors = [
			"/assets/vectors/andrew.svg",
		];
	}

	public vectorStyle(vector: string): Object {
		return {
			'background-image': `url('${vector}')`,
		}
	}
}