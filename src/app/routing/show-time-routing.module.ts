import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    SelectedMovieShowTimeComponent
} from "../component/show-time/selected-movie-show-time/selected-movie-show-time.component";
import {SelectedSeatComponent} from "../component/show-time/selected-seat/selected-seat.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    { path: "selectedShowTime/:id", component: SelectedMovieShowTimeComponent,canActivate: [AuthGuard],
        data: {role: ['ROLE_USER']}},
    { path: "selectedSeat", component: SelectedSeatComponent,canActivate: [AuthGuard],
        data: {role: ['ROLE_USER']}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowTimeRoutingModule{}
