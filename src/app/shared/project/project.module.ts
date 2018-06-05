import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service'; 

@NgModule({
	imports: [
		HttpClientModule,
	],
	declarations: [],
	providers: [
		ProjectService,
	],
	exports: [],
})
export class ProjectModule { }
