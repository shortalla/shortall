import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageModule } from '../shared/image/image.module';
import { ProfileModule } from '../shared/profile/profile.module';
import { appRouting } from '../app.routes';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectScreensComponent } from './project-screens/project-screens.component';
import { ProjectComponent } from './project.component';

import { ProjectService } from '../shared/project/project.service';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		ImageModule,
		ProfileModule,
		appRouting,
	],
	declarations: [
		ProjectOverviewComponent,
		ProjectScreensComponent,
		ProjectComponent,
	],
	providers: [
		ProjectService
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [
		ProjectComponent
	], 
})
export class ProjectModule { }
