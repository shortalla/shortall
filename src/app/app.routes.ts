import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { aboutRoutes } from './about/about.routes';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: MediaComponent,
    },{   
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