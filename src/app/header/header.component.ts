import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	private profile: Object

	constructor() {}

	ngOnInit() {
		this.profile = {
			firstName: 'Andrew',
			lastName: 'Shortall',
			jobTitle: 'Frontend Developer'
		}
	}

}
