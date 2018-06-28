import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from './header/header.module';
import { MediaModule } from './media/media.module';
import { ProjectModule } from './project/project.module';
import { AboutModule } from './about/about.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent } from './app.component';

import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    MediaModule,
    ProjectModule,
    AboutModule,
    FooterModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
