import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaDigitalComponent } from './media-digital/media-digital.component';
import { MediaPhotoComponent } from './media-photo/media-photo.component';
import { MediaVectorComponent } from './media-vector/media-vector.component';

export const mediaRoutes: Routes = [
    {
        path: 'digital',
        component: MediaDigitalComponent,
    }, {
        path: 'photo',
        component: MediaPhotoComponent,
    }, {
        path: 'vector',
        component: MediaVectorComponent,
    }, {
        path: '',
        redirectTo: 'digital',
        pathMatch: 'full',
    },
];

export const mediaRouting: ModuleWithProviders = RouterModule.forChild(mediaRoutes);