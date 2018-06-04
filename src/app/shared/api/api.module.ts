import { NgModule } from '@angular/core';
import { HttpModule } from  '@angular/http';

import { HttpPhotoService } from './http-photo.service';

@NgModule({
	imports: [
		HttpModule
	],
	declarations: [
	],
	providers: [
		HttpPhotoService
	],
	exports: [
		HttpPhotoService
	], 
})
export class ApiModule { }
