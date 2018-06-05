import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		ImageListComponent,
	],
	exports: [
		ImageListComponent,
	], 
})
export class ImageModule { }
