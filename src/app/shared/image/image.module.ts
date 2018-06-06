import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		ImageThumbnailComponent,
		ImageListComponent,
	],
	exports: [
		ImageListComponent,
	], 
})
export class ImageModule { }
