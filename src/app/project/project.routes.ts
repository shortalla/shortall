import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectScreensComponent } from './project-screens/project-screens.component';

export const projectRoutes: Routes = [
    {
        path: 'overview',
        component: ProjectOverviewComponent,
    }, {
        path: 'screens',
        component: ProjectScreensComponent,
    }, {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
    },
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);