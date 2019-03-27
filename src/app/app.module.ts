import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './app/views/search/search.component';
import { SeasonsComponent } from './views/seasons/seasons.component';
import { ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SeasonsComponent,
    ShowsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
