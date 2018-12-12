import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/project/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../../shared/project/project.model';
import { IconRegistryService } from '../../shared/icon/icon-registry.service';
import { ImageOrientation } from '../../shared/image/image-orientation.enum';

@Component({
  selector: 'as-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})

export class ProjectOverviewComponent implements OnInit {
  project: ProjectModel;
  orientation: ImageOrientation;

  constructor(
    private projectService: ProjectService,
    private iconRegistryService: IconRegistryService
  ) {}

  public ngOnInit(): void {
    this.projectService.project(1).then(project => this.project = project);
    this.orientation = ImageOrientation.Original;
  }
}