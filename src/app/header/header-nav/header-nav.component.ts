import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.scss']
})

export class HeaderNavComponent implements OnInit {
	private firstName: string;
	private lastName: string;

	constructor() {}

	ngOnInit() {
		this.firstName = 'Andrew';
		this.lastName = 'Shortall';
	}

}
