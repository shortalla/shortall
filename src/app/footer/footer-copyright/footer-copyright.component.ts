import { Component, OnInit } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile';

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
		this.name = `${PROFILE_DATA.firstName} ${PROFILE_DATA.lastName}`;
		const date = new Date();
		this.year = date.getFullYear();
	}
}
