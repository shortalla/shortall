import { Component, OnInit } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile';

@Component({
	selector: 'as-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.scss']
})

export class HeaderNavComponent implements OnInit {
	private profile: Object;

	constructor() {}

	ngOnInit() {
		this.profile = PROFILE_DATA;
	}

}
