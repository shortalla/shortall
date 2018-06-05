import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { ListModule } from '../shared/list/list.module';
import { ProfileModule } from '../shared/profile/profile.module';
import { ApiModule } from '../shared/api/api.module';

import { AboutPersonalComponent } from './about-personal/about-personal.component';
import { AboutWorkComponent } from './about-work/about-work.component';
import { AboutComponent } from './about.component';
import { IconModule } from '../shared/icon/icon.module';

import { PersonService } from '../shared/person/person.service';
import { JobService } from '../shared/job/job.service';
import { appRouting } from '../app.routes';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatIconModule,
		HttpClientModule,
		ListModule,
		ProfileModule,
		ApiModule,
		IconModule,
		appRouting,
	],
	declarations: [
		AboutPersonalComponent,
		AboutWorkComponent,
		AboutComponent,
	],
	providers: [,
		PersonService,
		JobService,
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [
		AboutComponent
	],
})
export class AboutModule { }
