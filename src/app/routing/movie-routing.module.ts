import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticMovieComponent} from "../component/movie/statistic-movie/statistic-movie.component";
import {AuthGuard} from "../guard/auth.guard";
import {ListMoviesAdminComponent} from "../component/movie/list-movies-admin/list-movies-admin.component";
import {MovieDetailComponent} from "../component/movie/movie-detail/movie-detail.component";

const routes: Routes = [
    {path: "detail-movie/:idMovie", component: MovieDetailComponent},
    {
        path: "statistic/movie",
        component: StatisticMovieComponent,
        canActivate: [AuthGuard],
        data: {role: ['ROLE_ADMIN']}
    },
    {
        path: "management/movies",
        component: ListMoviesAdminComponent,
        canActivate: [AuthGuard],
        data : {role: ['ROLE_ADMIN']}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule{}
