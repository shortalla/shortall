import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpProjectService } from '../api/http-project.service';
import { ProjectModel } from './project.model';

@Injectable()
export class ProjectService {
    private _list: ProjectModel[];

    get list(): ProjectModel[] {
        return this._list;
    }
    
    constructor(private httpProjectService: HttpProjectService) {
        this.initList();
    }

    private initList(): void {
        this.httpProjectService.projectList().subscribe(
            data => {
                this._list = data.map(
                    person => this.createModel(person)
                );
            },
            error => console.error(error),
        );
    }

    private createModel(json): ProjectModel {
        return {
            id: json.id,
            profileId: json.profileId,
            title: json.title,
            subtitle: json.subtitle,
            startDate: new Date(json.startDate),
            endDate: new Date(json.endDate),
            description: json.description,
            tools: json.tools,
            photo: json.photo,
            screenshots: json.screenshots,
        };
    }

    public project(id: number): Promise<ProjectModel> {
        return this.httpProjectService.project(id).toPromise(
        ).then(
            result => this.createModel(result)
        );
    }
}