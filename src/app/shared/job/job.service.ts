import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpJobService } from '../api/http-job.service';
import { JobModel } from './job.model';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
    private _list: JobModel[];

    get list(): JobModel[] {
        return this._list;
    }
    
    constructor(private httpJobService: HttpJobService) {
        this.initList();
    }

    private initList(): void {
        this.httpJobService.jobList().subscribe(
            data => {
                this._list = data.map(
                    job => this.createModel(job)
                );
            },
            error => console.error(error),
        );
    }

    private createModel(json): JobModel {
        return {
            id: json.id,
            profileId: json.profileId,
            title: json.title,
            company: json.company,
            startDate: new Date(json.startDate),
            endDate: new Date(json.endDate),
            location: json.location,
            website: json.website,
            responsibilities: json.responsibilities,
            photo: json.photo
        };
    }

    public job(id: number): Promise<any> {
        return this.httpJobService.job(id).toPromise(
        ).then(
            result => this.createModel(result),
        ).catch(
            error => console.error(id, error)   
        );
    }
}
