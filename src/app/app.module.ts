import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { FooterComponent } from './components/footer/footer.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ParallaxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'chat-app-pre'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
