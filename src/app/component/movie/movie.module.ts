import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMoviesAdminComponent} from './list-movies-admin/list-movies-admin.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';
import {CreateMovieComponent} from './create-movie/create-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieRoutingModule} from "../../routing/movie-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
    declarations: [
        ListMoviesAdminComponent,
        DeleteMovieComponent,
        CreateMovieComponent,
        EditMovieComponent,
        MovieDetailComponent,
    ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
    ]
})
export class MovieModule {
}
