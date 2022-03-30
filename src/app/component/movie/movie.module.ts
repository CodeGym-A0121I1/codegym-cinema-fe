import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMoviesAdminComponent} from './list-movies-admin/list-movies-admin.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';
import {CreateMovieComponent} from './create-movie/create-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieRoutingModule} from "../../routing/movie-routing.module";
import {StatisticMovieComponent} from './statistic-movie/statistic-movie.component';
import {NgxPaginationModule} from "ngx-pagination";
import {ListMovieComponent} from "./list-movie/list-movie.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {ShowTimeModule} from "../show-time/show-time.module";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../../../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    declarations: [
        ListMoviesAdminComponent,
        DeleteMovieComponent,
        CreateMovieComponent,
        EditMovieComponent,
        MovieDetailComponent,
        StatisticMovieComponent,
        ListMovieComponent
    ],
    exports: [
        CreateMovieComponent,
        EditMovieComponent,
        CreateMovieComponent,
    ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule,
        MatGridListModule,
        ShowTimeModule,
        MatSidenavModule,
        MatMenuModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        ReactiveFormsModule,
        MovieRoutingModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
    ]
})
export class MovieModule {
}
