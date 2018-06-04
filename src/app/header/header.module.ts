import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

import { appRoutes, appRouting } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    appRouting,
  ],
  declarations: [
    HeaderNavComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
