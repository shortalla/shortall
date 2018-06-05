import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appRouting } from '../app.routes';

import { MediaDigitalComponent } from './media-digital/media-digital.component';
import { MediaPhotoComponent } from './media-photo/media-photo.component';
import { MediaVectorComponent } from './media-vector/media-vector.component';
import { MediaComponent } from './media.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		appRouting,
	],
	declarations: [
		MediaDigitalComponent,
		MediaPhotoComponent,
		MediaVectorComponent,
		MediaComponent,
	],
	exports: [
		MediaComponent
	], 
})
export class MediaModule { }
