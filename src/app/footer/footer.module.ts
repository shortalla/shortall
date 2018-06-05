import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { FooterComponent } from './footer.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		FooterCopyrightComponent,
		FooterLinksComponent,
		FooterComponent,
	],
	exports: [
		FooterComponent
	], 
})
export class FooterModule { }
