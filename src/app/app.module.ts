import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { MediaModule } from './media/media.module';
import { FooterModule } from './footer/footer.module';

import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
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
    AboutModule,
    MediaModule,
    FooterModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
