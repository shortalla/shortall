import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpJobService } from './http-job.service'; 
import { HttpPersonService } from './http-person.service'; 
import { HttpProjectService } from './http-project.service'; 

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    HttpJobService,
    HttpPersonService,
    HttpProjectService,
  ],
  exports: [],
})
export class ApiModule { }
