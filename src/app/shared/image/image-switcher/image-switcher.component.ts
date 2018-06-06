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
	@Input() images: SafeResourceUrl[];
	index: number;
	
	constructor(private iconRegistryService: IconRegistryService) {}

	ngOnInit() {
		this.index = 0;
	}

	previous(): void {
		if (!this.isFirst())
			this.index = this.index - 1;
	}

	next(): void {
		if (!this.isLast())
			this.index = this.index + 1;
	}

	image(): SafeResourceUrl {
		return this.images[this.index];
	}

	public isFirst(): boolean {
		return this.index === 0;
	}

	public isLast(): boolean {
		return this.index === (this.images.length - 1);
	}
}
