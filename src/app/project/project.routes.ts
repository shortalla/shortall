import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';

export const projectRoutes: Routes = [
  {
    path: 'overview',
    component: ProjectOverviewComponent,
  }, {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);
