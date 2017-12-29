import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { ROUTES } from './app.router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
