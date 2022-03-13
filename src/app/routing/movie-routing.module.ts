import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticMovieComponent} from "../component/movie/statistic-movie/statistic-movie.component";
import {AuthGuard} from "../guard/auth.guard";
import {ListMoviesAdminComponent} from "../component/movie/list-movies-admin/list-movies-admin.component";

const routes: Routes = [
    {
        path: "statistic/movie",
        component: StatisticMovieComponent,
        canActivate: [AuthGuard],
        data: {role: ['ROLE_ADMIN']}
    },
    {
        path: "list-movie",
        component: ListMoviesAdminComponent,
        canActivate: [AuthGuard],
        data : {role: ['ROLE_ADMIN']}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule{}
