import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconRegistryService {

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        this.init();
    }

    private init(): void {
        this.matIconRegistry.addSvgIcon(
            'as_arrow_left',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/arrow-left.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_arrow_right',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/arrow-right.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_place_of_birth',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/place-of-birth.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_location',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/location.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_work',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/work.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_birthday',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/birthday.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_date',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/date.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'as_website',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/website.svg')
        );
    }
}