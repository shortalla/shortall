import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { ListModule } from '../shared/list/list.module';
import { ProfileTemplateModule } from '../shared/profile/profile-template/profile-template.module';

import { AboutPersonalComponent } from './about-personal/about-personal.component';
import { AboutWorkComponent } from './about-work/about-work.component';
import { AboutComponent } from './about.component';

import { ProfileService } from '../shared/profile/profile.service';
import { appRouting } from '../app.routes';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatIconModule,
		HttpClientModule,
		ListModule,
		ProfileTemplateModule,
		appRouting,
	],
	declarations: [
		AboutPersonalComponent,
		AboutWorkComponent,
		AboutComponent,
	],
	providers: [,
		ProfileService
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [
		AboutComponent
	],
})
export class AboutModule { }
