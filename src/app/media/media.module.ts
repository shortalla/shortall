import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    MediaComponent,
  ],
  exports: [
    MediaComponent
  ]
})
export class MediaModule { }
