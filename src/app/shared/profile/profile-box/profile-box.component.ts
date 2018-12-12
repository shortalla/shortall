import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'as-profile-box',
	templateUrl: './profile-box.component.html',
	styleUrls: ['./profile-box.component.scss'],
})

export class ProfileBoxComponent implements OnInit {
	@Input() public heading?: string;

	constructor() {}

	public ngOnInit(): void {}
}
