import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service'; 

@NgModule({
	imports: [
		HttpClientModule,
	],
	declarations: [],
	providers: [
		PersonService,
	],
	exports: [],
})
export class PersonModule { }
