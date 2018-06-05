import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile/profile.service';
import { JobModel } from '../../shared/profile/job';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'as-about-work',
	templateUrl: './about-work.component.html',
	styleUrls: ['./about-work.component.scss']
})

export class AboutWorkComponent implements OnInit {
	job: JobModel;

	constructor(private profileService: ProfileService,
				private matIconRegistry: MatIconRegistry,
				private domSanitizer: DomSanitizer){
		this.matIconRegistry.addSvgIcon(
			'as_place_of_birth',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icon/place-of-birth.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_location',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icon/location.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_work',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icon/work.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'as_birthday',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icon/birthday.svg')
		);
	}

	ngOnInit() {
		this.job = this.profileService.job;
	}
}
