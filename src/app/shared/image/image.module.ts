import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";

import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageSwitcherComponent } from './image-switcher/image-switcher.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatIconModule,
	],
	declarations: [
		ImageThumbnailComponent,
		ImageListComponent,
		ImageSwitcherComponent,
	],
	exports: [
		ImageThumbnailComponent,
		ImageListComponent,
		ImageSwitcherComponent,
	], 
})
export class ImageModule { }
