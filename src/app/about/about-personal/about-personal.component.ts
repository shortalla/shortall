import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile/profile.service';
import { ProfileModel } from '../../shared/profile/profile';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'as-about-personal',
	templateUrl: './about-personal.component.html',
	styleUrls: ['./about-personal.component.scss']
})

export class AboutPersonalComponent implements OnInit {
	profile: ProfileModel;

	constructor(private profileService: ProfileService,
				private matIconRegistry: MatIconRegistry,
				private domSanitizer: DomSanitizer){
		this.matIconRegistry.addSvgIcon(
			'as_place_of_birth',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/place-of-birth.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_location',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/location.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_work',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/work.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_birthday',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/birthday.svg')
		);
	}

	ngOnInit() {
		this.profile = this.profileService.profile;
	}
}
