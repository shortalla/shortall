import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-project-screens',
	templateUrl: './project-screens.component.html',
	styleUrls: ['./project-screens.component.scss']
})

export class ProjectScreensComponent implements OnInit {
	images: string[];

	constructor() {}

	ngOnInit() {
		this.images = [
			'/assets/projects/fypet/welcome-message.png',
			'/assets/projects/fypet/choose-face.png',
			'/assets/projects/fypet/draw-legs.png',
			'/assets/projects/fypet/name.png',
			'/assets/projects/fypet/move-location.png',
			'/assets/projects/fypet/wash.png',
			'/assets/projects/fypet/scan-chocolate.png',
			'/assets/projects/fypet/barcode-scanner.png'
		];
	}
}