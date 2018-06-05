import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaComponent } from './media/media.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { mediaRoutes } from './media/media.routes';
import { projectRoutes } from './project/project.routes';
import { aboutRoutes } from './about/about.routes';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: MediaComponent,
        children: mediaRoutes,
    }, {   
        path: 'project',
        component: ProjectComponent,
        children: projectRoutes,
    }, {   
        path: 'about',
        component: AboutComponent,
        children: aboutRoutes,
    }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {});