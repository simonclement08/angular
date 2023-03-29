import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./components/movies/movies.component";
import { HomeComponent } from "./components/home/home.component";
import { FavorisComponent } from "./components/favoris/favoris.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: MoviesComponent },
    { path: 'favoris', component: FavorisComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}