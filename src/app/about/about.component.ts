import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job/job.service';

@Component({
	selector: 'as-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

	constructor(private jobService: JobService) {}

	ngOnInit() {}

	public jobs() {
		return this.jobService.list;
	}
}
