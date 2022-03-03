import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListMovieComponent} from './list-movie/list-movie.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {CreateMovieComponent} from './component/movie-management/create-movie/create-movie.component';
import {EditMovieComponent} from './component/movie-management/edit-movie/edit-movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MovieRoutingModule} from "./routing/movie-routing.module";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
    declarations: [
        AppComponent,
        ListMovieComponent,
        NavbarComponent,
        FooterComponent,
        CreateMovieComponent,
        EditMovieComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        MovieRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
