import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "../component/movie/list-movie/list-movie.component";
import {ForbiddenComponent} from "../component/display/forbidden/forbidden.component";
import {
    SelectedMovieShowTimeComponent
} from "../component/show-time/selected-movie-show-time/selected-movie-show-time.component";
import {AuthGuard} from "../guard/auth.guard";
import {SelectedSeatComponent} from "../component/show-time/selected-seat/selected-seat.component";

const appRoutes: Routes = [
    {path: "", redirectTo: "movie", pathMatch: "full"},
    {path: "movie", component: ListMovieComponent},
    {path: "forbidden", component: ForbiddenComponent},
    { path: "selectedShowTime/:id", component: SelectedMovieShowTimeComponent,canActivate: [AuthGuard],
        data: {role: ['ROLE_USER']}},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {
    constructor() {
    }
}
