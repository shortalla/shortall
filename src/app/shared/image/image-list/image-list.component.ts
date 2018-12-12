import { Component, OnInit, Input } from '@angular/core';
import { ImageOrientation } from '../image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'as-image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.scss']
})

export class ImageListComponent implements OnInit {
	@Input() public images: SafeResourceUrl[];
	@Input() public hasBorder?: boolean;
	@Input() public hasGradient?: boolean;
	@Input() public orientation?: ImageOrientation;
	
	constructor() {}

	public ngOnInit(): void {}
}
