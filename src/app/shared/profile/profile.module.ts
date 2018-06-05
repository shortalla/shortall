import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProfileTemplateComponent } from './profile-template/profile-template.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		ProfileTemplateComponent
	],
	exports: [
		ProfileTemplateComponent
	],
})
export class ProfileModule { }
