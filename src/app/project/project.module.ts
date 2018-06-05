import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appRouting } from '../app.routes';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectComponent } from './project.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		appRouting,
	],
	declarations: [
		ProjectOverviewComponent,
		ProjectComponent,
	],
	exports: [
		ProjectComponent
	], 
})
export class ProjectModule { }
