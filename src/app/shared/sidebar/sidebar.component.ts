import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
	@Input() items: string[];

	constructor() {}

	ngOnInit() {}
}
