import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { ProfileTemplateComponent } from './profile-template/profile-template.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    ProfileBoxComponent,
    ProfileTemplateComponent
  ],
  exports: [
    ProfileBoxComponent,
    ProfileTemplateComponent
  ],
})
export class ProfileModule { }
