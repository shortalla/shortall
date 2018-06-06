import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpPersonService } from '../api/http-person.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonModel } from './person.model';

@Injectable()
export class PersonService {
    private _list: PersonModel[];

    get list(): PersonModel[] {
        return this._list;
    }
    
    constructor(private httpPersonService: HttpPersonService,
                private domSanitizer: DomSanitizer) {
        this.initList();
    }

    private initList(): void {
        this.httpPersonService.personList().subscribe(
            data => {
                this._list = data.map(
                    person => this.createModel(person)
                );
            },
            error => console.error(error),
        );
    }

    private createModel(json): PersonModel {
        return {
            id: json.id,
            firstName: json.firstName,
            lastName: json.lastName,
            dateOfBirth: new Date(json.dateOfBirth),
            placeOfBirth: json.placeOfBirth,
            location: json.location,
            workTitle: json.workTitle,
            skills: json.skills,
            photo: this.domSanitizer.bypassSecurityTrustResourceUrl(json.photo),
            summary: json.summary,
        };
    }

    public person(id: number): Promise<PersonModel> {
        return this.httpPersonService.person(id).toPromise(
        ).then(
            result => this.createModel(result)
        );
    }
}
