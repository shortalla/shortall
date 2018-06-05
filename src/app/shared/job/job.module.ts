import { NgModule } from '@angular/core';

import { ApiModule } from '../api/api.module';

import { JobService } from './job.service'; 

@NgModule({
	imports: [
		ApiModule,
	],
	declarations: [],
	providers: [
		JobService,
	],
	exports: [],
})
export class JobModule { }
