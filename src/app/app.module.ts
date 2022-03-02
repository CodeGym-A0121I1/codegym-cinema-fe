import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListMovieComponent} from './list-movie/list-movie.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {SelectedSeatComponent} from "./selected-seat/selected-seat.component";
import {SelectedMovieShowTimeComponent} from "./selected-movie-show-time/selected-movie-show-time.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        ListMovieComponent,
        NavbarComponent,
        FooterComponent,
        SelectedSeatComponent, SelectedMovieShowTimeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
