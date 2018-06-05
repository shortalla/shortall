import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/project/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../../shared/project/project.model';

@Component({
	selector: 'as-project-overview',
	templateUrl: './project-overview.component.html',
	styleUrls: ['./project-overview.component.scss']
})

export class ProjectOverviewComponent implements OnInit {
	project: ProjectModel;

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.projectService.project(
			1
		).then(project => this.project = project);
	}
}