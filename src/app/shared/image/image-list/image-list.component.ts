import { Component, OnInit, Input } from '@angular/core';
import { ImageOrientation } from '../image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.scss']
})

export class ImageListComponent implements OnInit {
	@Input() images: SafeResourceUrl[];
	@Input() hasBorder?: boolean;
	@Input() hasGradient?: boolean;
	@Input() orientation?: ImageOrientation;
	
	constructor() {}

	ngOnInit() {}
}
