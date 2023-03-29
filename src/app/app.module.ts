import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    FavorisComponent,
    NavComponent,
  ],
  imports: [ BrowserModule, AppRoutingModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
