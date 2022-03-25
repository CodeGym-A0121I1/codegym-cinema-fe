import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    SelectedMovieShowTimeComponent
} from "../component/show-time/selected-movie-show-time/selected-movie-show-time.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {
        path: "movie/:id/showtime", component: SelectedMovieShowTimeComponent, canActivate: [AuthGuard],
        data: {role: ['ROLE_USER']}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowTimeRoutingModule{}
