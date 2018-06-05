import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-footer-copyright',
	templateUrl: './footer-copyright.component.html',
	styleUrls: ['./footer-copyright.component.scss']
})

export class FooterCopyrightComponent implements OnInit {
	name: string;
	year: number;

	constructor() {}

	ngOnInit() {
		this.name = 'Andrew Shortall';
		const date = new Date();
		this.year = date.getFullYear();
	}
}
