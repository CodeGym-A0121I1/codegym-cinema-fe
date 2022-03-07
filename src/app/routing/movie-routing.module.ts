import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {CreateMovieComponent} from "../component/movie/create-movie/create-movie.component";
import {EditMovieComponent} from "../component/movie/edit-movie/edit-movie.component";

const routes: Routes = [
    {path: "movie/create", component: CreateMovieComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']}},
    {path: "movie/edit/:id", component: EditMovieComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule{}
