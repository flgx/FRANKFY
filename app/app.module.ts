import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS} from '@angular/http';
import { routing,
         appRoutingProviders } from './app.routes';
import { AppComponent }  from './app.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import { FormsModule }   from '@angular/forms';
import { SpotifyService } from './services/spotify.services';

@NgModule({
  imports: [ BrowserModule,routing,FormsModule],
  declarations: [ AppComponent,SearchComponent,AboutComponent,ArtistComponent,AlbumComponent],
  providers: [
    appRoutingProviders,SpotifyService,HTTP_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
