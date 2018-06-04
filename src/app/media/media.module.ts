import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MediaDigitalComponent } from './media-digital/media-digital.component';
import { MediaPhotoComponent } from './media-photo/media-photo.component';
import { MediaSvgComponent } from './media-svg/media-svg.component';
import { MediaComponent } from './media.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		MediaDigitalComponent,
		MediaPhotoComponent,
		MediaSvgComponent,
		MediaComponent,
	],
	exports: [
		MediaComponent
	], 
})
export class MediaModule { }
