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
    imports: [
        CommonModule,
        MovieRoutingModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule,
    ]
})
export class MovieModule {
}
