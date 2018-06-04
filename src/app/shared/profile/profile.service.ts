import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PROFILE_DATA } from '../../data/profile';
import { JOB_DATA } from '../../data/job';
import { ProfileModel } from './profile';
import { JobModel } from './job';

@Injectable()
export class ProfileService {
    profile: ProfileModel;
    job: JobModel;

    constructor() {
        this.profile = PROFILE_DATA;
        this.job = JOB_DATA;
    }
}
