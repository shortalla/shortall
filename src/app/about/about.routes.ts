import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPersonalComponent } from './about-personal/about-personal.component';
import { AboutWorkComponent } from './about-work/about-work.component';

export const aboutRoutes: Routes = [
    {
        path: 'profile',
        component: AboutPersonalComponent,
    }, {
        path: 'work',
        component: AboutWorkComponent,
    }, {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
    },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);