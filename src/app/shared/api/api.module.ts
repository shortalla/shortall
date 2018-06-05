import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpJobService } from './http-job.service'; 
import { HttpPersonService } from './http-person.service'; 

@NgModule({
	imports: [
		HttpClientModule,
	],
	declarations: [],
	providers: [
		HttpJobService,
		HttpPersonService,
	],
	exports: [],
})
export class ApiModule { }
