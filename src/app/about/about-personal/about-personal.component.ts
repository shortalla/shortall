import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person/person.service';
import { PersonModel } from '../../shared/person/person.model';
import { IconRegistryService } from '../../shared/icon/icon-registry.service';

@Component({
	selector: 'as-about-personal',
	templateUrl: './about-personal.component.html',
	styleUrls: ['./about-personal.component.scss']
})

export class AboutPersonalComponent implements OnInit {
	public person: PersonModel;

	constructor(
    private personService: PersonService,
    private iconRegistryService: IconRegistryService
  ) {}

	public ngOnInit(): void {
		this.personService.person(1).then(person => this.person = person);
	}
}
