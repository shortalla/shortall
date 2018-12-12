import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job/job.service';
import { JobModel } from '../shared/job/job.model';

@Component({
	selector: 'as-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(private jobService: JobService) {}

  public ngOnInit(): void {}

  public jobs(): JobModel[] {
    return this.jobService.list;
  }
}
