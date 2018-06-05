import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageModule } from '../shared/image/image.module';
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
	exports: [
		ProjectComponent
	], 
})
export class ProjectModule { }
