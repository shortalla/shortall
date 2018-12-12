import { Component, OnInit, Input } from '@angular/core';
import { ImageOrientation } from '../image-orientation.enum';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IconRegistryService } from '../../icon/icon-registry.service';

@Component({
	selector: 'as-image-switcher',
	templateUrl: './image-switcher.component.html',
	styleUrls: ['./image-switcher.component.scss']
})

export class ImageSwitcherComponent implements OnInit {
	@Input() public images: SafeResourceUrl[];
	public index: number;
	
	constructor(private iconRegistryService: IconRegistryService) {}

	public ngOnInit(): void {
		this.index = 0;
	}

	public previous(): void {
		if (!this.isFirst())
			this.index = this.index - 1;
	}

	public next(): void {
		if (!this.isLast())
			this.index = this.index + 1;
	}

	public image(): SafeResourceUrl {
		return this.images[this.index];
	}

	public isFirst(): boolean {
		return this.index === 0;
	}

	public isLast(): boolean {
		return this.index === (this.images.length - 1);
	}
}
