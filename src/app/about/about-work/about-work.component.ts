import { Component, OnInit } from '@angular/core';
import { JobService } from '../../shared/job/job.service';
import { JobModel } from '../../shared/job/job.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IconRegistryService } from '../../shared/icon/icon-registry.service';

@Component({
	selector: 'as-about-work',
	templateUrl: './about-work.component.html',
	styleUrls: ['./about-work.component.scss']
})

export class AboutWorkComponent implements OnInit {
	public job: JobModel;

	constructor(
    private jobService: JobService,
    private iconRegistryService: IconRegistryService,
    private activatedRoute: ActivatedRoute
  ) {}

	public ngOnInit(): void {
		this.activatedRoute.params.subscribe(data => {
      const params = this.activatedRoute.snapshot.params;
      this.jobService.job(
        params.id
      ).then(job => this.job = job);
		});
	}
}
