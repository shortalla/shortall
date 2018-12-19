import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
  ],
})
export class SidebarModule { }
